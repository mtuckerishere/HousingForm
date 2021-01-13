const toggleForm = document.querySelector("#toggleForm");
const recruiterForm = document.querySelector(".recruiterInformation");
const employeeForm = document.querySelector(".employeeForm");
const employeeFields = document.querySelector(".employeeFields");

const familyInfo = document.querySelector(".family");
const hasFamily = document.querySelector('#addFamilyYes');
const familyInfoField = document.querySelector(".familyInfoField");

const hasChildren = document.querySelector('#hasChildrenYes');
const childrenInfo = document.querySelector(".childrenInfo");
const childInfoField = document.querySelector(".childInfoField");
const addChild = document.querySelector(".addChild");
const childContainer = document.querySelector(".childContainer");

const petInfo = document.querySelector(".petInfo");
const hasPet = document.querySelector("#hasPetYes");
const petInfoField = document.querySelector(".petInfoFields");
const recruiterFields = document.querySelector(".recruiterFields");

hasPet.addEventListener("change", ()=>{
    EnableFields(petInfoField,petInfo, hasPet);
})
hasChildren.addEventListener("change",()=>{
    EnableFields(childInfoField, childrenInfo, hasChildren);
    
})
hasFamily.addEventListener("change",()=>{ 
    EnableFields(familyInfoField, familyInfo, hasFamily);
})

toggleForm.addEventListener("click",function(){ 

    ChangeForm();
});

function ChangeForm(){
    if(recruiterForm.style.display==="none"){
        recruiterForm.style.display ="block";
        employeeForm.style.display ="none";
        employeeFields.disabled = true;
        recruiterFields.disabled = false;
        toggleForm.innerText = "Employee Form";
    }else{
        employeeForm.style.display="block";
        recruiterForm.style.display="none";
        recruiterFields.disabled = true;
        employeeFields.disabled=false;
        toggleForm.innerText = "Recruiter Form";
    }
}
function EnableFields(field, displayInfo, hasAttribute){
    if(hasAttribute.checked){
        field.disabled = false;
        displayInfo.style.display="flex";       
    }else{
        field.disabled = true;
        displayInfo.style.display="none";
    }
}
function ClassList(){
    const divChild = document.createElement("div");

    divChild.classList.add("form-group");
    divChild.classList.add("col-md-3");
    
   
    return divChild;
}

//parameter used for testing class names
function AddChildName(count){

    const div = document.createElement("div");
    div.classList.add("form-row");
    
    const divChild = document.createElement("div");

    divChild.classList.add("form-group");
    divChild.classList.add("col-md-3");
    
    const newElement = childContainer.appendChild(div);
    const previousDiv = newElement.appendChild(divChild);

    const inputName = document.createElement("input");
    inputName.setAttribute("type","text");
    inputName.classList.add("form-control")
    inputName.setAttribute("name","childName" + count );
    inputName.setAttribute("placeholder","Childs Name");
    
    const newName = divChild.appendChild(inputName);

    const inputDate = document.createElement("input");
    inputDate.setAttribute("type","date");
    inputDate.classList.add("form-control");
    inputDate.setAttribute("name", "childBirthdate2");
    
    const newStuff = ClassList();
    newStuff.appendChild(inputDate);
    newElement.appendChild(newStuff);

    const inputGender = document.createElement("input");
    inputGender.setAttribute("type","text");
    inputGender.classList.add("form-control")
    inputGender.setAttribute("name","childGender2");
    inputGender.setAttribute("placeholder","Childs Gender");

    const selectGender = ClassList();
    selectGender.appendChild(inputGender);
    newElement.appendChild(selectGender);

    console.log(newName);
    console.log(newStuff);
    console.log(selectGender);

 }

addChild.addEventListener("click",(e)=>{
    e.preventDefault();
    //testClassNameChange
    count=3;
    AddChildName(3);

})

function CreateDiv(){
    
    const div = document.createElement("div");
    div.classList.add("form-row");
    
    const divChild = document.createElement("div");

    divChild.classList.add("form-group");
    divChild.classList.add("col-md-3");
    
    const newElement = childContainer.appendChild(div);
    newElement.appendChild(divChild);
    
    return newElement;
   
}

