"use strict";const design=document.querySelector(".js-designLegend"),fill=document.querySelector(".js-fillLegend"),share=document.querySelector(".js-shareLegend"),designForm=document.querySelector(".js-design-form"),fillForm=document.querySelector(".js-fill-form"),shareForm=document.querySelector(".js-share-form"),nameInput=document.querySelector(".js-input-name"),jobInput=document.querySelector(".js-input-job"),telephoneInput=document.querySelector(".js-input-phone"),emailInput=document.querySelector(".js-input-email"),linkedinInput=document.querySelector(".js-input-linkedin"),gitInput=document.querySelector(".js-input-git"),namePreview=document.querySelector(".js-name"),jobPreview=document.querySelector(".js-job"),telephonePreview=document.querySelector(".js-phone"),emailPreview=document.querySelector(".js-email"),linkedinPreview=document.querySelector(".js-linkedin"),gitPreview=document.querySelector(".js-gitHub"),cardPreview=document.querySelector("js-card-preview"),paletteOne=document.querySelector("js-palette-one"),paletteTwo=document.querySelector("js-palette-two"),paletteThree=document.querySelector("js-palette-three"),btnReset=document.querySelector(".js-btn-reset"),btnShare=document.querySelector("js-btn-share");function collapseDesign(){designForm.classList.add("collapsed")}function openDesign(){designForm.classList.remove("collapsed")}function collapseFill(){fillForm.classList.add("collapsed")}function openFill(){fillForm.classList.remove("collapsed")}function collapseShare(){shareForm.classList.add("collapsed")}function openShare(){shareForm.classList.remove("collapsed")}function handleClickDesign(e){collapseFill(),collapseShare(),openDesign()}function handleClickFill(e){openFill(),collapseDesign(),collapseShare()}function handleClickShare(e){collapseDesign(),collapseFill(),openShare()}design.addEventListener("click",handleClickDesign),fill.addEventListener("click",handleClickFill),share.addEventListener("click",handleClickShare);const data={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function updatepreview(){namePreview.innerHTML=data.name,""===nameInput.value&&(namePreview.innerHTML="Nombre Apellido"),jobPreview.innerHTML=data.job,""===jobInput.value&&(jobPreview.innerHTML="Front-end developer"),telephonePreview.href="tel:"+data.phone,emailPreview.href="mailto:"+data.email,linkedinPreview.href=`https://www.linkedin.com/in/${data.linkedin}/`,gitPreview.href="https://www.github.com/"+data.github}function handleInputName(){data.name=nameInput.value,updatepreview()}function handleInputJob(){data.job=jobInput.value,updatepreview()}function handleInputPhone(){data.phone=telephoneInput.value,updatepreview()}function handleInputEmail(){data.email=emailInput.value,updatepreview()}function handleInputLinkedin(){data.linkedin=linkedinInput.value,updatepreview()}function handleInputGit(){data.github=gitInput.value,updatepreview()}function handlepaletteOne(e){e.preventDefault(),cardPreview.classList.add("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.remove("paletteThree")}function handlepaletteTwo(e){e.preventDefault(),cardPreview.classList.remove("paletteOne"),cardPreview.classList.add("paletteTwo"),cardPreview.classList.remove("paletteThree")}function handlepaletteThree(e){e.preventDefault(),cardPreview.classList.remove("paletteOne"),cardPreview.classList.remove("paletteTwo"),cardPreview.classList.add("paletteThree")}function handleClickDelete(e){e.preventDefault(),nameInput.value="",jobInput.value="",telephoneInput.value="",telephonePreview.href="#",emailInput.value="",emailPreview.href="#",linkedinInput.value="",linkedinPreview.href="#",gitInput.value="",gitPreview.href="#",namePreview.innerHTML="Nombre Apellido",jobPreview.innerHTML="Front-end developer"}nameInput.addEventListener("input",handleInputName),jobInput.addEventListener("input",handleInputJob),telephoneInput.addEventListener("input",handleInputPhone),emailInput.addEventListener("input",handleInputEmail),linkedinInput.addEventListener("input",handleInputLinkedin),gitInput.addEventListener("input",handleInputGit),paletteOne.addEventListener("click",handlepaletteOne),paletteTwo.addEventListener("click",handlepaletteTwo),paletteThree.addEventListener("click",handlepaletteThree),btnReset.addEventListener("click",handleClickDelete);