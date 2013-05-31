/* [ ---- Gebo Admin Panel - dynamic tree ---- ] */

	$(document).ready(function() {
		gebo_dynatree.tree_a();
		gebo_dynatree.tree_b();
		gebo_dynatree.tree_c();
	});
	
	//* dynatree
	gebo_dynatree = {
		tree_a: function() {
			 $("#tree_a").dynatree();
		},
        tree_b: function() {
			$("#tree_b").dynatree({
                checkbox: true,
                classNames: {checkbox: "dynatree-radio"},
                selectMode: 1,
                onSelect: function(select, node) {
                    var s = node.tree.getSelectedNodes().join(" | ");
                    $("#tree_b_echoSelection").children('pre').text(s);
                }
            });
		},
        tree_c: function() {
            $("#tree_c").dynatree({
                checkbox: true,
                selectMode: 3,
                onSelect: function(select, node) {
                    var s = node.tree.getSelectedNodes().join(" | ");
                    $("#tree_c_echoSelection").children('pre').text(s);
                }
            });

		}
	};