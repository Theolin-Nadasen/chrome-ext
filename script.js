let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-button"); 
const leadList = document.getElementById("leads");
const deleteBtn = document.getElementById("delete");
const tabBtn = document.getElementById("add-tab");

if(localStorage.getItem("myLeads")){
    myLeads = JSON.parse(localStorage.getItem("myLeads"));
    addLead();
    console.log(myLeads);
}

inputBtn.addEventListener("click", () => {
    if(inputEl.value){
        myLeads.push(inputEl.value);
        inputEl.value = "";
        addLead();
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
    }
});

deleteBtn.addEventListener("click", () => {
    localStorage.clear();
    myLeads = [];
    leadList.innerHTML = "";
});

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        addLead();
    });
});

function addLead(){
    leadList.innerHTML = "";
    for(let i = 0; i < myLeads.length; i++){
        let lead = document.createElement("li");
        lead.innerHTML = `<a href="${myLeads[i]}>${myLeads[i]}</a>`;
        leadList.appendChild(lead);
    }
}