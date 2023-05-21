// Variables 
// varibale for Input-btn 
const inputBtn = document.querySelector("#input-btn");
// Varibale for the input element 
const inputEl = document.getElementById("input-el");
// Variable for the unordered list
const ulEl = document.getElementById("ul-el");
// Array to store the leads
let myLeads=[];
let leadsFromLocal = JSON.parse(localStorage.getItem("myLeads"));
let delBtn = document.getElementById("delete-btn");
let tabBtn = document.getElementById("tab-btn");

if(leadsFromLocal){
    myLeads = leadsFromLocal;
    renderLeads(myLeads);
}



inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads" , JSON.stringify(myLeads));
    renderLeads(myLeads);
});
function renderLeads(leads){
    let listItems = "";
    for(let i = 0 ;i<leads.length;i++){
        listItems+=`
        <li> 
            <a target='_blank' href = '${leads[i]}'> 
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
}

delBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
});

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads" , JSON.stringify(myLeads));
        renderLeads(myLeads);
    });
});

