$(document).ready(function () {
    // Sample tree data
    var treeData = [
        { id: 1, text: "Node 1", items: [
            { id: 2, text: "Node 1.1" },
            { id: 3, text: "Node 1.2" }
        ]},
        { id: 4, text: "Node 2" },
        { id: 5, text: "Node 3" }
    ];

    // Initialize the TreeView
    var treeview = $("#treeview").kendoTreeView({
        dataSource: treeData
    }).data("kendoTreeView");

    // Initialize the ContextMenu
    var contextMenu = $("#context-menu").kendoContextMenu({
        target: "#treeview",
        filter: ".k-item",
        animation: false
    }).data("kendoContextMenu");

    // Store the copied node value
    var copiedNodeValue = null;

    // Context menu item click event handlers
    contextMenu.bind("select", function (e) {
        var selectedNode = treeview.select();
        var clickedItemId = e.item.attr("id");

        if (clickedItemId === "copy" && selectedNode.length > 0) {
            copiedNodeValue = treeview.dataItem(selectedNode).text;
            console.log("Node value copied:", copiedNodeValue);
        } else if (clickedItemId === "paste" && selectedNode.length > 0 && copiedNodeValue !== null) {
            treeview.text(selectedNode, copiedNodeValue);
            console.log("Node value pasted:", copiedNodeValue);
        }
    });
});
