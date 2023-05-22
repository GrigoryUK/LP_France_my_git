class OrdersSpreadsheet
  attr_accessor :orders

  def initialize (orders)
    @orders = orders
  end

  def generate_xls
    book = Spreadsheet::Workbook.new
    sheet = book.create_worksheet name: "Orders"

    sheet.row(0).concat %w{ID Email City Created}
    sheet.row(0).default_format = Spreadsheet::Format.new weight: :bold

    row_index = 1
    orders.each do |order|
      sheet.row(row_index).concat [order.id, order.email, order.city, order.created_at.to_s]
      row_index += 1
    end

    data_to_send = StringIO.new
    book.write data_to_send
    data_to_send.string
  end
end
