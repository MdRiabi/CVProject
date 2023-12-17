// regex for validation
const strRegex =  /^[a-zA-Z\s]*$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following number formats - (123) 456-7890, (123)456-7890, 123-456-7890, 123.456.7890, 1234567890, +31636363634, 075-63546725 */
const digitRegex = /^\d+$/;

const mainForm = document.getElementById('cv-form');
const validType = {
    TEXT:'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any'
}


// user inputs elements
let firstnameElem = mainForm.firstname,
    lastnameElem = mainForm.lastname, 
    middlenameElem = mainForm.middlename,
    imageElem = mainForm.image,
    designationElem = mainForm.designation,
    addressElem = mainForm.address,
    phonenoElem = mainForm.phoneno,
    summaryElem = mainForm.summary;



    // display elements

    let nameDsp = document.getElementById('fullmane_dsp'),
        imageDsp = document.getElementById('image_dsp'),
        phonenoDsp = document.getElementById('phoneno_dsp'),
        emailDsp = document.getElementById('email_dsp'),
        addressDsp = document.getElementById('address_dsp'),
        designationDsp = document.getElementById('designation_dsp'),
        summaryDsp = document.getElementById('summary_dsp'),
        projectsDsp = document.getElementById('projects_dsp'),
        achievementsDsp = document.getElementById('achievements_dsp'),
        skillsDsp = document.getElementById('skills_dsp'),
        educationsDsp = document.getElementById('educations_dsp'),
        experiencesDsp = document.getElementById('experiences_dsp');

            //first value is for the attributes and second one passes the nodelists
        const fetchValues = (attrs, ...nodeLists) =>{
            let elemsAttrsCount = nodeLists.length;
            let elemsDataCount = nodeLists[0].length;
            let tempDataArr = [];
            for(let i=0;i<elemsDataCount;i++){
                let dataObj = {};
                for(let j=0;j<elemsAttrsCount;j++){
                    dataObj[`${attrs[j]}`] = nodeLists[j][i].value;
                }
                tempDataArr.push(dataObj);
            }
            return tempDataArr;
        }

        const getUserInputs = () =>{
            //achievements
            let achievementsTitleElem = document.querySelectorAll('.achieve_title'),
                achievementsDescriptionElem = document.querySelectorAll('.achieve_description');

            
            //experience
            let expTitleElem = document.querySelectorAll('.exp_title'),
                expOrganizationElem = document.querySelectorAll('.exp_organization'),
                expLocationElem = document.querySelectorAll('.exp_location'),
                expStartDateElem = document.querySelectorAll('.exp_start_date'),
                expEndDateElem = document.querySelectorAll(".exp_end_date"),
                expDescriptionElem = document.querySelectorAll('.exp_description');

            // education
            let eduSchoolElem = document.querySelectorAll('.edu_school'),
                    eduDegreeElem = document.querySelectorAll('.edu_degree'),
                    eduCityElem = document.querySelectorAll('.edu_degree'),
                    eduStartDateElem = document.querySelectorAll('.edu_start_date'),
                    eduGraduarionDateElem = document.querySelectorAll('.edu_graduation_date'),
                    eduDescriptionElem = document.querySelectorAll('.edu_description');

            // Projects

            let projTitleElem = document.querySelectorAll('.proj_title'),
                projLinkElem = document.querySelectorAll('.proj_link'),
                projDescriptionElem = document.querySelectorAll('.proj_description');


            // Skills
            let skillElem = document.querySelectorAll('.skill');

            // event listeners for form validation
            firstnameElem.addEventListener('keyup', (e)=>{validateFormData(e.target, validType.TEXT, 'First Name')});
            middlenameElem.addEventListener('keyup', (e)=>{validateFormData(e.target, validType.TEXT_EMP, 'Middle Name')});
            lastnameElem.addEventListener('keyup', (e)=>{validateFormData(e.target, validType.TEXT, 'Last Name')});
            phonenoElem.addEventListener('keyup', (e)=>{validateFormData(e.target, validType.PHONENO, 'Phone Number')});
            emailElem.addEventListener('keyup', (e)=>{validateFormData(e.target, validType.EMAIL, 'Email')});
            addressElem.addEventListener('keyup', (e)=>{validateFormData(e.target, validType.ANY, 'Address')});
            designationElem.addEventListener('keyup', (e)=>{validateFormData(e.target, validType.TEXT, 'Designation')});


        };

        function validateFormData(elem, elemType, elemName){

            
        }