# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_01_134706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "buildings", force: :cascade do |t|
    t.string "name"
    t.string "short_name"
    t.string "image", default: "http://coghillcartooning.com/wp-content/uploads/2010/05/Red-Inc-biz-illustrations-large-v01-e1273166396418.jpg"
    t.string "access_list"
    t.bigint "site_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["site_id"], name: "index_buildings_on_site_id"
  end

  create_table "chart_rows", force: :cascade do |t|
    t.string "row_number"
    t.string "title"
    t.string "height", default: "40vh"
    t.string "parent_type"
    t.integer "parent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "charts", force: :cascade do |t|
    t.string "title"
    t.integer "row", default: 1
    t.integer "position", default: 1
    t.string "width"
    t.string "points", default: ""
    t.string "parent_type"
    t.integer "parent_id"
    t.string "plot_type", default: "line"
    t.string "plot_options", default: ""
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "data_files", force: :cascade do |t|
    t.string "name"
    t.string "attachment"
    t.string "site_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sites", force: :cascade do |t|
    t.string "name"
    t.string "short_name"
    t.string "image", default: "http://coghillcartooning.com/wp-content/uploads/2010/05/Red-Inc-biz-illustrations-large-v01-e1273166396418.jpg"
    t.string "access_list"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "buildings", "sites"
end
