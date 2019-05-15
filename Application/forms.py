from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Div, Field, Submit
from django.forms import ModelForm

from .models import Applications


class CustomTextInput(Field):
    template = "Application/CustomFields/CustomTextInput.html"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.wrapper_class = kwargs.pop("wrapper_class", "wrap-input100 validate-input m-b-26")


class ApplicationForm(ModelForm):
    class Meta:
        model = Applications
        fields = ['Registration_No', 'Name', 'Address_For_Communication', 'Permanent_Address', 'Pincode', 'State',
                  'District', 'Mobile_Number', 'Name_of_Guardian', 'PhoneNumber_of_Guardian', 'Year_of_Study', "Gender",
                  "Category", "Physically_Handicapped", 'Keralite', "Sub_Category", "Department", "Course_of_study",
                  "Course_completion_date", "Admission_date", "CAT_Rank", "Prime_Ministers_program"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()

        self.helper.form_class = 'login100-form validate-form'
        self.helper.form_id = 'application_form'
        self.helper.form_action = '/submitted/'
        self.helper.layout = Layout(
            CustomTextInput('Registration_No', ),
            CustomTextInput('Name', ),
            CustomTextInput('Address_For_Communication', template='Application/CustomFields//CustomTextArea.html'),
            CustomTextInput('Permanent_Address', template='Application/CustomFields/CustomTextArea.html'),
            Div(Div(CustomTextInput('Pincode', css_class='wrap-input100 validate-input m-b-18'), css_class="col-sm-4"),
                Div( css_class='col-sm-3'),
                Div(CustomTextInput('State', template='Application/CustomFields//CustomSelect.html',
                                    onchange="load_district()", id="state"), css_class="col-sm-5 m-t-11"),
                css_class='form-row'),
            CustomTextInput('District', template='Application/CustomFields/CustomSelect.html', id='district'),
            CustomTextInput('Mobile_Number'),
            CustomTextInput('Name_of_Guardian'),
            CustomTextInput('PhoneNumber_of_Guardian'),
            CustomTextInput('Year_of_Study', template='Application/CustomFields/CustomSelect.html', id='Year'),
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
                                wrapper_class='wrap-input100 -line validate-input m-b-18"'),
                Div(css_class='col-sm-4'),
                CustomTextInput('Keralite', template='Application/CustomFields/CustomBool.html',
                                wrapper_class='wrap-input100 -line validate-input m-b-18"'),
                css_class='form-row w-100'),

            CustomTextInput('Department', template='Application/CustomFields/CustomSelect.html',
                            id='dept', wrapper_class="wrap-input100 validate-input m-b-26 m-t-26",
                            onchange='load_course()'),
            CustomTextInput('Course_of_study', template='Application/CustomFields/CustomSelect.html', id='course'),
            Div(
                CustomTextInput('Admission_date', template='Application/CustomFields/CustomDate.html',
                                wrapper_class="wrap-input100 validate-input m-b-18", placeholder="Admission"),
                CustomTextInput('Course_completion_date', template='Application/CustomFields/CustomDate.html',
                                wrapper_class="wrap-input100 validate-input m-b-18", placeholder="Course Completion"),
                css_class='form-row',
            ),
            Div(
                Div(CustomTextInput('CAT_Rank', css_class='wrap-input100 validate-input m-b-18'),
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
