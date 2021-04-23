(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1119:function(t,e,a){t.exports=a.p+"assets/img/workflow.e589fa31.png"},1693:function(t,e,a){"use strict";a.r(e);var l=a(26),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"trello"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#trello"}},[t._v("#")]),t._v(" Trello")]),t._v(" "),l("p",[l("a",{attrs:{href:"https://trello.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Trello"),l("OutboundLink")],1),t._v(" is a web-based Kanban-style list-making application which is a subsidiary of Atlassian. Users can create their task boards with different columns and move the tasks between them.")]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),l("p",[t._v("You can find authentication information for this node "),l("RouterLink",{attrs:{to:"/nodes/credentials/Trello/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),l("h2",{attrs:{id:"basic-operations"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("Attachment")]),t._v(" "),l("ul",[l("li",[t._v("Create a new attachment for a card")]),t._v(" "),l("li",[t._v("Delete an attachment")]),t._v(" "),l("li",[t._v("Get the data of an attachment")]),t._v(" "),l("li",[t._v("Returns all attachments for the card")])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("Board")]),t._v(" "),l("ul",[l("li",[t._v("Create a new board")]),t._v(" "),l("li",[t._v("Delete a board")]),t._v(" "),l("li",[t._v("Get the data of a board")]),t._v(" "),l("li",[t._v("Update a board")])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("Card")]),t._v(" "),l("ul",[l("li",[t._v("Create a new card")]),t._v(" "),l("li",[t._v("Delete a card")]),t._v(" "),l("li",[t._v("Get the data of a card")]),t._v(" "),l("li",[t._v("Update a card")])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("Checklist")]),t._v(" "),l("ul",[l("li",[t._v("Create a checklist item")]),t._v(" "),l("li",[t._v("Create a new checklist")]),t._v(" "),l("li",[t._v("Delete a checklist")]),t._v(" "),l("li",[t._v("Delete a checklist item")]),t._v(" "),l("li",[t._v("Get the data of a checklist")]),t._v(" "),l("li",[t._v("Returns all checklists for the card")]),t._v(" "),l("li",[t._v("Get a specific checklist on a card")]),t._v(" "),l("li",[t._v("Get the completed checklist items on a card")]),t._v(" "),l("li",[t._v("Update an item in a checklist on a card")])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("Label")]),t._v(" "),l("ul",[l("li",[t._v("Add a label to a card")]),t._v(" "),l("li",[t._v("Create a new label")]),t._v(" "),l("li",[t._v("Delete a label")]),t._v(" "),l("li",[t._v("Get the data of a label")]),t._v(" "),l("li",[t._v("Returns all labels for the board")]),t._v(" "),l("li",[t._v("Remove a label from a card")]),t._v(" "),l("li",[t._v("Update a label")])])]),t._v(" "),l("details",{staticClass:"custom-block details"},[l("summary",[t._v("List")]),t._v(" "),l("ul",[l("li",[t._v("Archive/Unarchive a list")]),t._v(" "),l("li",[t._v("Create a new list")]),t._v(" "),l("li",[t._v("Get the data of a list")]),t._v(" "),l("li",[t._v("Get all the lists")]),t._v(" "),l("li",[t._v("Get all the cards in a list")]),t._v(" "),l("li",[t._v("Update a list")])])]),t._v(" "),l("h2",{attrs:{id:"example-usage"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),l("p",[t._v("This workflow allows you to create a new card in Trello. You can also find the "),l("a",{attrs:{href:"https://n8n.io/workflows/461",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),l("OutboundLink")],1),t._v(" on the website. This example usage workflow would use the following two nodes.")]),t._v(" "),l("ul",[l("li",[l("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[t._v("Start")])],1),t._v(" "),l("li",[l("a",{attrs:{href:""}},[t._v("Trello")])])]),t._v(" "),l("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),l("p",[l("img",{attrs:{src:a(1119),alt:"A workflow with the Trello node"}})]),t._v(" "),l("h3",{attrs:{id:"_1-start-node"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[t._v("#")]),t._v(" 1. Start node")]),t._v(" "),l("p",[t._v("The start node exists by default when you create a new workflow.")]),t._v(" "),l("h3",{attrs:{id:"_2-trello-node"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-trello-node"}},[t._v("#")]),t._v(" 2. Trello node")]),t._v(" "),l("ol",[l("li",[t._v("First of all, you'll have to enter credentials for the Trello node. You can find out how to do that "),l("RouterLink",{attrs:{to:"/nodes/credentials/Trello/"}},[t._v("here")]),t._v(".")],1),t._v(" "),l("li",[t._v("Enter the ID of the list in which you want to create a new card in the "),l("em",[t._v("List ID")]),t._v(" field. You can find instructions on how to obtain the ID of the list in the FAQs below.")]),t._v(" "),l("li",[t._v("Enter the name of the card in the "),l("em",[t._v("Name")]),t._v(" field.")]),t._v(" "),l("li",[t._v("Enter the description of the card in the "),l("em",[t._v("Description")]),t._v(" field.")]),t._v(" "),l("li",[t._v("Click on "),l("em",[t._v("Execute Node")]),t._v(" to run the workflow.")])]),t._v(" "),l("h2",{attrs:{id:"faqs"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[t._v("#")]),t._v(" FAQs")]),t._v(" "),l("h3",{attrs:{id:"how-do-i-find-the-list-id"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-find-the-list-id"}},[t._v("#")]),t._v(" How do I find the List ID?")]),t._v(" "),l("ol",[l("li",[t._v("Open the Trello board that contains the list.")]),t._v(" "),l("li",[t._v("If the list doesn't have any cards, add a card to the list.")]),t._v(" "),l("li",[t._v("Open the card, add '.json' at the end of the URL, and press enter.")]),t._v(" "),l("li",[t._v("In the JSON file, you will see a field called "),l("code",[t._v("idList")]),t._v(".")]),t._v(" "),l("li",[t._v("Copy "),l("code",[t._v("idList")]),t._v("and paste it in the "),l("em",[t._v("List ID")]),t._v(" field in n8n.")])]),t._v(" "),l("h2",{attrs:{id:"further-reading"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),l("FurtherReadingBlog",{attrs:{node:"Trello"}})],1)}),[],!1,null,null,null);e.default=i.exports}}]);