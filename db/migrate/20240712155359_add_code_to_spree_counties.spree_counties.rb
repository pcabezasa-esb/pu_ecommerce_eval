# This migration comes from spree_counties (originally 20150810175815)
class AddCodeToSpreeCounties < ActiveRecord::Migration[7.1]
  def change
    add_column :spree_counties, :code, :string
  end
end
