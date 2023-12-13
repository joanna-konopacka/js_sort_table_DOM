document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("table"),t=e.querySelector("tbody");e.addEventListener("click",function(e){if("TH"===e.target.tagName){var r=Array.from(e.target.parentNode.children).indexOf(e.target),n=Array.from(t.rows);n.sort(function(e,t){var n=e.cells[r].textContent.trim(),o=t.cells[r].textContent.trim();return n.localeCompare(o,void 0,{numeric:!0})}),n.forEach(function(e){return t.removeChild(e)}),n.forEach(function(e){return t.appendChild(e)})}})});//# sourceMappingURL=index.b0b88eb5.js.map

//# sourceMappingURL=index.b0b88eb5.js.map
