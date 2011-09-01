Simple enough. You have a column in your model's table in which you'd like to hold the custom sorted order of the table's rows, and you'd like your ActiveRecord resource to provide a way to manage that column. This plugin defines an ActiveRecord dsl method to declare that attribute as the sort column.

    sortable :position do
      column :title
    end

where :position is the name of your custom order attribute. This method also declares collection_actions for your resource to manage drag-and-drop sorting of those rows. It uses jQuery UI Sortable plugin and will ajax the new sort order back to your app whenever the sort order is changed.

To use the index_as\_grid mode, use this syntax:

	sortable :position, :as => :grid do |resource|
	  div resource.title
	end

Usage:
	
	gem 'activeadmin_sortable', '0.0.1.pre'
