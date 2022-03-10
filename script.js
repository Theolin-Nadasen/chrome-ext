let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-button"); 
const leadList = document.getElementById("leads");

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    addLead();
})

function addLead(){
    let lead = document.createElement("li");
    for(let i = 0; i < myLeads.length; i++){
        lead.innerHTML = `<a href="#">${myLeads[i]}</a>`;
    }
    leadList.appendChild(lead);
}