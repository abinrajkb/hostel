from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Div, Field, Submit
from crispy_forms.utils import TEMPLATE_PACK
from django.forms import ModelForm, DateField
from django.utils import timezone

from Hostel import settings
from .models import Applications


class CustomTextInput(Field):
    template = "Application/CustomFields/CustomTextInput.html"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.wrapper_class = kwargs.pop("wrapper_class", "wrap-input100 validate-input m-b-26")
        self.keywords = kwargs

    def render(self, form, form_style, context, template_pack=TEMPLATE_PACK, extra_context=None, **kwargs):
        if extra_context is None:
            extra_context = {}

        extra_context = {**extra_context, **self.keywords}
        if hasattr(self, 'wrapper_class'):
            extra_context['wrapper_class'] = self.wrapper_class

        template = self.get_template_name(template_pack)

        return self.get_rendered_fields(
            form, form_style, context, template_pack,
            template=template, attrs=self.attrs, extra_context=extra_context,
            **kwargs
        )


class ApplicationForm(ModelForm):
    Course_completion_date = DateField(input_formats=settings.DATE_INPUT_FORMATS)
    Admission_date = DateField(input_formats=settings.DATE_INPUT_FORMATS)

    class Meta:
        model = Applications
        fields = ['Registration_No', 'Name', 'Address_For_Communication', 'Permanent_Address', 'Pincode', 'State',
                  'District', 'Mobile_Number', 'Name_of_Guardian', 'PhoneNumber_of_Guardian', 'Year_of_Study', "Gender",
                  "Category", "Physically_Handicapped", 'Keralite', "Sub_Category", "Department", "Course_of_study",
                  "Course_completion_date", "Admission_date", "CAT_Rank", "Prime_Ministers_program"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()

        self.fields["Sub_Category"].widget.attrs["required"] = False
        self.fields["Sub_Category"].widget.attrs["disabled"] = True

        self.helper.form_class = 'login100-form validate-form'
        self.helper.form_id = 'application_form'
        self.helper.form_action = '/apply/submitted/'
        self.helper.layout = Layout(
            CustomTextInput('Registration_No', ),
            CustomTextInput('Name', ),
            CustomTextInput('Address_For_Communication', template='Application/CustomFields//CustomTextArea.html'),
            CustomTextInput('Permanent_Address', template='Application/CustomFields/CustomTextArea.html'),
            Div(Div(CustomTextInput('Pincode', css_class='wrap-input100 validate-input m-b-18 validating', id='pin'),
                    css_class="col-sm-4"),
                Div(css_class='col-sm-3'),
                Div(CustomTextInput('State', template='Application/CustomFields//CustomSelect.html',
                                    onchange="load_district()", id="state"), css_class="col-sm-5 m-t-11"),
                css_class='form-row'),
            CustomTextInput('District', template='Application/CustomFields/CustomSelect.html', id='district'),
            CustomTextInput('Mobile_Number', id='mobile'),
            CustomTextInput('Name_of_Guardian'),
            CustomTextInput('PhoneNumber_of_Guardian'),
            CustomTextInput('Year_of_Study', template='Application/CustomFields/CustomSelect.html', id='Year',
                            css_class='validating'),
            Div(
                Div(
                    CustomTextInput('Gender', template='Application/CustomFields/CustomSelect.html', id='Gender'),
                    css_class='col-sm-4'),
                Div(css_class='col-sm-4'),
                Div(CustomTextInput('Category', template='Application/CustomFields/CustomSelect.html', id='Category',
                                    onchange='load_subcategory()'),
                    css_class='col-sm-4'),
                css_class='form-row w-100',

            ),
            CustomTextInput('Sub_Category', template='Application/CustomFields/CustomSelect.html',
                            id='subcategory'),
            Div(CustomTextInput("Physically_Handicapped", template='Application/CustomFields/CustomBool.html',
                                wrapper_class='wrap-input100 -line validate-input m-b-18', css_class='validating'),
                Div(css_class='col-sm-4'),
                CustomTextInput('Keralite', template='Application/CustomFields/CustomBool.html',
                                wrapper_class='wrap-input100 -line validate-input m-b-18', css_class='validating'),
                css_class='form-row w-100'),

            CustomTextInput('Department', template='Application/CustomFields/CustomSelect.html',
                            id='dept', wrapper_class="wrap-input100 validate-input m-b-26 m-t-26",
                            onchange='load_course()'),
            CustomTextInput('Course_of_study', template='Application/CustomFields/CustomSelect.html', id='course'),
            Div(
                CustomTextInput('Admission_date', template='Application/CustomFields/CustomDate.html',
                                wrapper_class="wrap-input100 validate-input m-b-18", placeholder="Admission",
                                type='date'),
                CustomTextInput('Course_completion_date', template='Application/CustomFields/CustomDate.html',
                                wrapper_class="wrap-input100 validate-input m-b-18", placeholder="Course Completion",
                                type='date'),
                css_class='form-row w-100',
            ),
            Div(
                Div(CustomTextInput('CAT_Rank', css_class='wrap-input100 validate-input m-b-18 validating', id='num'),
                    css_class="col-sm-3",
                    ),
                Div(css_class='col-sm-5'),
                CustomTextInput('Prime_Ministers_program', template='Application/CustomFields/CustomBool.html'),
                css_class="form-row w-100"),
            Div(
                Submit('Submit', 'Submit', css_class="login100-form-btn w-25", onclick="new_function()"),
                css_class="container-login100-form-btn"

            )
        )
