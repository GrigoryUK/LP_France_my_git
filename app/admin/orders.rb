# coding: utf-8
ActiveAdmin.register Order do
  menu label: 'Order'

  permit_params :email, :city

  index do
    selectable_column
    id_column
    column :email
    column :city
    column :created_at
    actions
  end

  show do
    attributes_table do
      row "Email" do
        resource.email
      end
      row "City" do
        resource.city
      end
    end
  end

  form do |f|
    f.inputs do
      f.input :email
      f.input :city
    end

    f.actions
  end

  csv do
    column :id
    column :email
    column :city
    column :created_at
  end


  csv force_quotes: true, col_sep: ';', column_names: true do
    column :id
    column :email
    column :city
    column (:created_at) { |order| order.created_at.to_s }
  end

  controller do
    def index
      index! do |format|
        format.csv {
          super
        }
        format.xls {
          spreadsheet = OrdersSpreadsheet.new @orders
          send_data spreadsheet.generate_xls, filename: "orders-" + Time.new.strftime("%Y-%m-%d") + ".xls"
        }
      end
    end
  end
end
