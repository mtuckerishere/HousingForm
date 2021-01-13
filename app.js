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
const removeChild = document.querySelector(".removeChild")

const petInfo = document.querySelector(".petInfo");
const hasPet = document.querySelector("#hasPetYes");
const petInfoField = document.querySelector(".petInfoFields");
const petContainer = document.querySelector(".petContainer");
const addPet = document.querySelector(".addPet");
const removePet = document.querySelector(".removePet");
const recruiterFields = document.querySelector(".recruiterFields");

hasPet.addEventListener("change", ()=>{
    EnableFields(petInfoField,petInfoField, hasPet);
})
hasChildren.addEventListener("change",()=>{
    EnableFields(childInfoField, childInfoField, hasChildren);
    
})
hasFamily.addEventListener("change",()=>{ 
    EnableFields(familyInfoField, familyInfoField, hasFamily);
})

toggleForm.addEventListener("click",function(evt){ 

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
        displayInfo.style.display="block";       
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
function AddAdditionalPet(count){
    const div = document.createElement("div");
    div.classList.add("form-row");
    
    const divChild = document.createElement("div");

    divChild.classList.add("form-group");
    divChild.classList.add("col-md-3");
    
    const newElement = petContainer.appendChild(div);
    const previousDiv = newElement.appendChild(divChild);

    const newAnimal = document.createElement("select");
    newAnimal.classList.add("form-control")
    newAnimal.setAttribute("name","typeOfPet" + count );
    
    const animalTypes = ["Dog","Cat"];
    for(i=0;i<animalTypes.length;i++){
        const animalType = document.createElement("option");
        animalType.value = animalTypes[i];
        animalType.text = animalTypes[i];
        newAnimal.appendChild(animalType);
    }
    
    divChild.appendChild(newAnimal);

    const inputBreed = document.createElement("input");
    inputBreed.setAttribute("type","text");
    inputBreed.classList.add("form-control");
    inputBreed.setAttribute("name","breedOfPet" + count);
    inputBreed.setAttribute("placeholder","Breed of Pet");
 
    const newBreed = ClassList();
    newBreed.appendChild(inputBreed);
    newElement.appendChild(newBreed);

    const inputWeight = document.createElement("input");
    inputWeight.setAttribute("type","number");
    inputWeight.setAttribute("min","0");
    inputWeight.classList.add("form-control");
    inputWeight.setAttribute("name", "petWeight" + count);

    const newWeight = ClassList();
    newWeight.appendChild(inputWeight);
    newElement.appendChild(newWeight);
}
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
    
    divChild.appendChild(inputName);

    const inputDate = document.createElement("input");
    inputDate.setAttribute("type","date");
    inputDate.classList.add("form-control");
    inputDate.setAttribute("name", "childBirthdate" +count);
    
    const newStuff = ClassList();
    newStuff.appendChild(inputDate);
    newElement.appendChild(newStuff);

    const inputGender = document.createElement("input");
    inputGender.setAttribute("type","text");
    inputGender.classList.add("form-control")
    inputGender.setAttribute("name","childGender" + count);
    inputGender.setAttribute("placeholder","Childs Gender");

    const selectGender = ClassList();
    selectGender.appendChild(inputGender);
    newElement.appendChild(selectGender);
 }

let childCount=2;
addChild.addEventListener("click",(e)=>{
    e.preventDefault();
    AddChildName(childCount);
    childCount++;
})
removeChild.addEventListener("click",(e)=>{
    e.preventDefault();
    if(childCount>=2){
        RemoveElement(childContainer);
        childCount--;
    }
    console.log(childCount);
})
let petCount =2;
addPet.addEventListener("click",(e)=>{
    e.preventDefault();
    AddAdditionalPet(petCount);
    petCount++;
})
function RemoveElement(containerName){
    containerName.removeChild(containerName.lastChild);
}

removePet.addEventListener("click",(e)=>{
    e.preventDefault();
    if(petCount>=2){
    RemoveElement(petContainer);
    petCount--;
    }
    console.log(petCount);

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