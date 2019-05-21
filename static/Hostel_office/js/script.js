
l = [
    {
        "priority": 0,
        "regno": 1,
        "name": "English",
        "phy_hand": "True",
        "pm": "True",
        "caste":"SC",
        "dis": 50,
        "cat":500
    },
    {
        "priority": 0,
        "regno": 1,
        "name": "English",
        "phy_hand": "True",
        "pm": "True",
        "caste":"SC",
        "dis": 50,
        "cat":500
    },
    {
        "priority": 0,
        "regno": 1,
        "name": "English",
        "phy_hand": "True",
        "pm": "True",
        "caste":"SC",
        "dis": 50,
        "cat":500
    },
    {
        "priority": 0,
        "regno": 1,
        "name": "English",
        "phy_hand": "True",
        "pm": "True",
        "caste":"SC",
        "dis": 50,
        "cat":500
    },
    {
        "priority": 0,
        "regno": 1,
        "name": "English",
        "phy_hand": "True",
        "pm": "True",
        "caste":"SC",
        "dis": 50,
        "cat":500
    }
]

function populate() {
    tbody = document.getElementById("minimal-tbody");
    for (var i = 0; i < l.length; i++) {
        s = `<td style="">`+l[i].priority+`</td>
             <td style="">`+l[i].regno+`</td>
             <td style="">`+l[i].name+`</td>
             <td style="">`+l[i].phy_hand+`</td>
             <td style="">`+l[i].pm+`</td>
             <td style="">`+l[i].caste+`</td>
             <td style="">`+l[i].dis+`</td>
             <td style="">`+l[i].cat+`</td>
             
             
              <td class="rs-select2 js-select-simple select--no-search">
              <select name="category"style="width: 75px">
              <option disabled="disabled" selected="selected">Category</option>
              <option>Alloted</option>
              <option>Non-Alloted</option>
              </select>
              <div class="select-dropdown"></div>
              </td>
              
               <td class="rs-select2 js-select-simple select--no-search">
              <select name="category"style="width: 175px">
              <option disabled="disabled" selected="selected">Category</option>
              <option data-width="50">Sanathana Hostel for Boys</option>
              <option >Sarovar Hostel for Boys</option>
              <option>Sarovar Research Floor for Boys</option>
              <option>Siberia Hostel for Boys</option>
              <option>Swaraj Hostel for Boys</option>
              <option>Sagar Hostel for Boys</option>
              <option>Sahara Hostel for Boys</option>
              <option>Cochin University Marine Sciences(CUMS) Hostel for Boys</option>
              <option>Anaswara Hostel for Girls</option>
              <option>Aiswarya Hostel for Girls</option>
              <option>Athulya Hostel for Girls</option>
              <option>Ananya Girls Hostel</option>
              <option>Anagha Hostel for Girls</option>
              <option>Alakananda Hostel for Girls</option>
              </select>
              <div class="select-dropdown"></div>
              </td>`
        tbody.innerHTML+=s
    }

}
populate()

