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
const isNewEmployee = document.querySelector("#isNewEmployee");
const stateCity = document.querySelectorAll(".stateCity");
const currentBranch = document.querySelector(".currentBranch");
const travelerApproved = document.querySelector("#travelersApproved")
const additionalTravelerInfo = document.querySelector(".additionalTravelerInfo");
const addTraveler = document.querySelector(".addTraveler");
const removeTraveler = document.querySelector(".removeTraveler");
const travelContainer = document.querySelector(".travelContainer");

const sameOnGovID = document.querySelector("#nameOnGovIdSame");
const govID = document.querySelector(".govIdContainer");
const firstName = document.querySelector("#empFirstName");
const lastName = document.querySelector("#empLastName");
const govFirstName = document.querySelector("#empFirstNameGov");
const govLastName = document.querySelector("#empLastNameGov");

const addHouseTrip = document.querySelector(".addHouseTrip");
const removeHouseTrip = document.querySelector(".removeHouseTrip");
const houseHuntingContainer = document.querySelector(".houseHuntingContainer");

isNewEmployee.addEventListener("change",()=>{
    if(isNewEmployee.value==="Yes"){
        console.log(isNewEmployee.value);
        currentBranch.style.display="none";
        for(i=0;i<stateCity.length; i++){
        stateCity[i].style.display ="block"
        }
        

    }
    if(isNewEmployee.value==="No"){
        console.log(isNewEmployee.value);
        for(i=0;i<stateCity.length; i++){
            stateCity[i].style.display ="none"
            }
            
        currentBranch.style.display="block";
        console.log(stateCity);
    }
})
sameOnGovID.addEventListener("change",()=>{
    if(!sameOnGovID.cheked){
        govID.style.display="block";

    }if(sameOnGovID.checked){
        govID.style.display ="none";
        govFirstName.value = firstName.value;
        govLastName.value = lastName.value;
    }
    
    console.log(sameOnGovID.value);
})
travelerApproved.addEventListener("change",()=>{
    EnableFields(additionalTravelerInfo,additionalTravelerInfo,travelerApproved);
    console.log(travelerApproved.value);
})
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
function ClassList(size){
    const divChild = document.createElement("div");

    divChild.classList.add("form-group");
    divChild.classList.add(size);
    
   
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
 
    const newBreed = ClassList("col-md-3");
    newBreed.appendChild(inputBreed);
    newElement.appendChild(newBreed);

    const inputWeight = document.createElement("input");
    inputWeight.setAttribute("type","number");
    inputWeight.setAttribute("min","0");
    inputWeight.classList.add("form-control");
    inputWeight.setAttribute("name", "petWeight" + count);

    const newWeight = ClassList("col-md-3");
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
    
    const newStuff = ClassList("col-md-3");
    newStuff.appendChild(inputDate);
    newElement.appendChild(newStuff);

    const inputGender = document.createElement("select");
    inputGender.classList.add("form-control")
    inputGender.setAttribute("name","childGender" + count );
    
    const genderSelection = ["Male","Female"];
    for(i=0;i<genderSelection.length;i++){
        const genderOption = document.createElement("option");
        genderOption.value = genderSelection[i];
        genderOption.text = genderSelection[i];
        inputGender.appendChild(genderOption);
    }
    const selectGender = ClassList("col-md-3");
    selectGender.appendChild(inputGender);
    newElement.appendChild(selectGender);
 }

 function AddAdditionalTraveler(count){
    const div = document.createElement("div");
    div.classList.add("form-row");
    
    const divChild = document.createElement("div");

    divChild.classList.add("form-group");
    divChild.classList.add("col-md-5");
    
    const newElement = travelContainer.appendChild(div);
    const previousDiv = newElement.appendChild(divChild);

    const travelerFirstName = document.createElement("input");
    travelerFirstName.setAttribute("type","text");
    travelerFirstName.classList.add("form-control");
    travelerFirstName.setAttribute("name", "additionalTravelerFirstName" + count)
    travelerFirstName.setAttribute("placeholder", "First Name");

    divChild.appendChild(travelerFirstName);

    const travelerLastName = document.createElement("input");
    travelerLastName.setAttribute("type","text");
    travelerLastName.classList.add("form-control");
    travelerLastName.setAttribute("name", "additionalTravelerLastName" + count);
    travelerLastName.setAttribute("placeholder","Last Name");

    const inputTravelerLastName = ClassList("col-md-5");
    inputTravelerLastName.appendChild(travelerLastName);
    newElement.appendChild(inputTravelerLastName);

 }
 function AddHouseHuntingTrip(count){
    const div = document.createElement("div");
    div.classList.add("form-row");
    
    const divChild = document.createElement("div");

    divChild.classList.add("form-group");
    divChild.classList.add("col-md-4");
    
    const newElement = houseHuntingContainer.appendChild(div);
    const previousDiv = newElement.appendChild(divChild);

    const houseHuntingTripLabel = document.createElement("label");
    houseHuntingTripLabel.classList.add("form-control");
    houseHuntingTripLabel.setAttribute("id", "houseHuntingTrip" + count)
    houseHuntingTripLabel.innerText="House Hunting Trip " + count; 


    divChild.appendChild(houseHuntingTripLabel);

    const houseHuntingTripStart = document.createElement("input");
    houseHuntingTripStart.setAttribute("type","date");
    houseHuntingTripStart.classList.add("form-control");
    houseHuntingTripStart.setAttribute("name", "houseTripStartDate" + count);
    
    const houseHuntingDateInput = ClassList("col-md-4");
    houseHuntingDateInput.appendChild(houseHuntingTripStart);
    newElement.appendChild(houseHuntingDateInput);

    const houseHuntingTripEnd = document.createElement("input");
    houseHuntingTripEnd.setAttribute("type","date");
    houseHuntingTripEnd.classList.add("form-control");
    houseHuntingTripEnd.setAttribute("name", "houseTripEndtDate" + count);
    
    const houseHuntingEndInput = ClassList("col-md-4");
    houseHuntingEndInput.appendChild(houseHuntingTripEnd);
    newElement.appendChild(houseHuntingEndInput);
 }
let childCount=2;
addChild.addEventListener("click",(e)=>{
    e.preventDefault();
    AddChildName(childCount);
    childCount++;
})
removeChild.addEventListener("click",(e)=>{
    e.preventDefault();
    if(childCount>2){
        RemoveElement(childContainer);
        childCount--;
    }
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
    if(petCount>2){
    RemoveElement(petContainer);
    petCount--;
    }
})
let additionalTravel =2;
addTraveler.addEventListener("click", (e)=>{
    e.preventDefault();
    AddAdditionalTraveler(additionalTravel);
    additionalTravel++;
})
removeTraveler.addEventListener("click", (e)=>{
    e.preventDefault();
    if(additionalTravel>2){
    RemoveElement(travelContainer);
    additionalTravel--;
    }
    
})
let houseTrip = 1;
addHouseTrip.addEventListener("click",(e)=>{
    e.preventDefault();
    AddHouseHuntingTrip(houseTrip);
    houseTrip++;
})
removeHouseTrip.addEventListener("click",(e)=>{
    e.preventDefault();
    if(houseTrip>1){
    RemoveElement(houseHuntingContainer);
    houseTrip--;
    }
    
})
