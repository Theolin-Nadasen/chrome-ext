let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-button"); 
const leadList = document.getElementById("leads");

if(localStorage.getItem("myLeads")){
    myLeads = JSON.parse(localStorage.getItem("myLeads"));
    addLead();
    console.log(myLeads);
}

inputBtn.addEventListener("click", () => {
    if(inputEl.value){
        myLeads.push(inputEl.value);
        inputEl.value = "";
        leadList.innerHTML = "";
        addLead();
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
    }
})

function addLead(){
    for(let i = 0; i < myLeads.length; i++){
        let lead = document.createElement("li");
        lead.innerHTML = `<a href="#">${myLeads[i]}</a>`;
        leadList.appendChild(lead);
    }
}