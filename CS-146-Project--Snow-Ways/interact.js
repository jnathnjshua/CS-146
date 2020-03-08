let submissonForm = document.getElementById("submission_form");
let townName = document.getElementById("town_name");
let schURL = document.getElementById("schedule_url");
let imgURL = document.getElementById("image_url");

let feedbackForm = document.getElementById("feedback_form");
let radioN = document.getElementById("notListed");
let name = document.getElementById("name_input");
let favTown = document.getElementById("fav_town");
let feed = document.getElementById("comments");

if (submissonForm){
    submissonForm.addEventListener("submit", event=>{
        event.preventDefault();
        let text1 = document.createTextNode("Town:");
        let text2 = document.createTextNode(townName.value);
        let text3 = document.createTextNode("Plowing Information:");
        let text4 = document.createTextNode(schURL.value);
        let text5 = document.createTextNode("Image url:");
        let text6 = document.createTextNode(imgURL.value);
        let text7 = document.createTextNode("Please confirm your entries before submitting.");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");
        let div6 = document.createElement("div");
        let p = document.createElement("p");
        div1.appendChild(text1);
        div2.appendChild(text2);
        div3.appendChild(text3);
        div4.appendChild(text4);
        div5.appendChild(text5);
        div6.appendChild(text6);
        p.appendChild(text7);
        let confirmButton = document.createElement("button");
        let aconfirm = document.createElement("a");
        aconfirm.href = "submissionThanks.html";
        aconfirm.innerHTML = "Confirm";
        confirmButton.appendChild(aconfirm);
        let resultDiv= document.getElementById("form_results");
        resultDiv.appendChild(p);
        resultDiv.appendChild(div1);
        resultDiv.appendChild(div2);
        resultDiv.appendChild(div3);
        resultDiv.appendChild(div4);
        resultDiv.appendChild(div5);
        resultDiv.appendChild(div6);
        resultDiv.appendChild(confirmButton);
    });
}

if (feedbackForm){
    feedbackForm.addEventListener("submit", event=>{
        event.preventDefault();
        var message = "Thank you for your response, " + name.value + ".";
        if (feed.value != "") {
            message = message + " Your feedback will be taken into consideration.";
        }
        message = message + " We will try to make each map and listing as good as the ones for " + favTown.options[favTown.selectedIndex].value + ".";
        if (radioN.checked) {
            message = message + " If you would like for us to list your town, please click on Recommend Town on the navigation bar and fill out the form.";
        }
        alert(message);
    });
}