# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)




s "💡 Seeding Candidates..."
Candidate.create!([
  {
    email: "cassidy@gmail.com",
    password: "123",
    name: "Cassidy W",
  },
  {
    email: "nessa@gmail.com",
    password: "123",
    name: "Nessa B",
  }
])

puts "💡 Seeding Jobs..."
Job.create!([
  {
    name: "CNC Machinist- 3rd shift",
    qualifications: "CNC lathe experience, Reading calipers and QC tools, Basic blueprint reading, Mechanical aptitude, Mathematical aptitude"
    responsibilities: "Set up and operate CNC lathe/mill including machine tooling, collets and adjustments. Receive production jobs and review blueprints and materials for accuracy. Set up material and machine offsets to produce parts to required bluepirnt specifications. Maintains machine throughout the production run and ensures part conformance and records SPC. Collects and records all data required."
    type_of_hire: "Contract/Temp"
    description: "Monday - Friday, 11pm to 7:30am, hours may vary slightly, overtime may be required. $25.00 - $30.00 per hour to start. Located in Louisville, near NW Pkwy & Dillon Rd. Drug & background screening required"
  },
  {
    name: "Maintenance Technician - 2nd Shift",
    qualifications: "This position requires a High School Diploma or GED equivalent. Minimum of 1 year previous maintenance experience, trade or technical school preferred. Must have a basic understanding of electrical and mechanical systems, hydraulics, pneumatics, and all types of production/industrial machines. Should also have prior experience working in a fast-paced manufacturing environment."
    responsibilities: "The Maintenance Technician is responsible for timely completion of preventative maintenance throughout the assigned areas.  The Maintenance Technician will perform necessary functions to complete work orders while operating alone or with a team."
    type_of_hire: "Contract/Temp"
    description: "Monday - Friday, 3pm to 11pm.$26.00 per hour, DOE. Located in Louisville, near NW Pkwy & Dillon Rd. Drug & background screen required."
  },
  {  
    name: "Material Handler - 2nd Shift",
    qualifications: "This position requires a High School Diploma or GED equivalent. This position should have 0-1 year previous experience in a similar type position. Reads and assesses pick lists, bills of material and prints. Receives work order documents from production planning and arranges them by start date priority and according to cell location; includes all production areas. Reviews works orders to ensure materials are available and to the floor in time to meet the pick date; if needed material is not on hand alerts supervisor and fill out green card. Works with purchasing and inventory team to determine current stock levels and ensure material availability; communicate potential variances as needed. Works with planning department to prioritize orders. Coordinates with inventory team to perform cycle counts and oversee inventory accuracy. Oversees inventory; includes stocking, monitoring and dispensing inventory. Obtains materials needed for product build from various departments (i.e., spring wind) and delivers to Prep area. Verifies label accuracy on all remnant material. Backflushes material orders in the JDE system."
    responsibilities: " The Material Handler is responsible for assisting with the efficient operation of the manufacturing cells by ensuring raw materials are available when needed. They will investigate material problems as they arise and strive to ensure work orders are completed on time to meet requests and demand."
    type_of_hire: "Contract/Temp"
    description: "Monday - Friday, 2pm to 10:30pm. Temporary assignment scheduled to last 6 months but may be extended. $18 - 20.00 per hour. located in Louisville, near NW Pkwy & Dillon Rd. Drug & background screen required."
  },
  {
    name: "Assembler / Spring Fabricator - 2nd Shift",
    qualifications: "Previous assembly experience with small parts. Spot welding experience. Experience working in a fast-paced manufacturing environment. Detail oriented. Ability to lift up to 50 lbs. Ability to stand, walk, sit, bend, and twist for entire shift"
    responsibilities: "• Cuts Cantilever, Helical and Slantcoil spring for seal production. Welds Cantilever, triple lot Helical and Slantcoil to obtain a proper spot weld with a direct current welder. Loads Cantilever, Helical and Slantcoil spring into seal jackets using various tools ensuring they are secured according to illustrated work instructions. Cleans and deburs seals as needed to ensure quality products. Follows procedures for pulling rosettes from sheet and forming with rosette punch. Follows procedures for second operations; includes using appropriate chemicals to complete etching and notching on seals. Follows procedures for “-000” spring assembly. For specified seals, ensures silicone is accurately filled in to cover spring.Labeling, packing, and following customer packaging procedures. Cross-trains in other areas including but not limited to injection molding, CNC and extrusion. Other duties as assigned."
    type_of_hire: "Contract/Temp"
    description: "Monday to Friday, 2pm to 10:30pm. $16 - $18 per hour. Located in Louisville, near NW Pkwy & Dillon Rd. Drug & background screen required "
  },
  {
    name: "Battery Assembler",
    qualifications: "No previous experience required. Ability to lift up to 50 lbs. Ability to bend, twist, walk, and sit for entire shift."
    responsibilities: "Spot welding. Gathering materials. Assembling batteries. Lifing up to 50 lbs"
    type_of_hire: "Contract/Temp"
    description: "Monday - Friday, 6:30am to 3pm. $18 - 20.00 per hour. Located in Golden, near I-70 & Hwy 58. Drug & background screen required."
  },
  {
    name: "Warehouse Inventory & Logistics Coordinator",
    qualifications: "3+ years of inventory control experience in a warehouse.
    ERP system experience (SAP, Oracle, Great Plains etc.) a plus!
    Excellent computer skills including Microsoft Office (Word, Excel, Outlook). Familiar with 5S and Kanban philosophies is a plus. Help drive continuous improvement initiatives. Attention to detail and focus driven."
    responsibilities: "As a part of a small team, you will oversee inventory levels, maintain databases and reconcile actual stock counts to office records, or computes figures from records such as sales orders, production records or purchase invoices.  Primary point of contact for investigating and correcting inventory discrepancies. Prepare various reports such as inventory balances, and shortages.  Processing orders, taking records and accurate data logging into various systems. Responsible for arranging outgoing freight and communicating to all appropriate parties. To do so, you are a proactive, service-oriented individual with excellent oral, written and interpersonal skills who thrives in a fast-paced environment."
    type_of_hire: "Contract/Temp"
    description: "Monday - Friday, 7am to 3:30pm. $20 - 23.00 per hour, DOE. Located in Lafayette, near NW Pkwy & Dillon Rd. Drug & background screen required."
  },
  {
    name: "MolsonCoors - Bottles Specialist",
    qualifications: "Production experience. Ability to lift up to 50 lbs frequently. Good attendance critical. Fully vaccinated against COVID-19. Ability to work any shift. Ability to work overtime."
    responsibilities: "Performs assignments safely at all times. Responsible for start ups, shut downs, product changes, line trouble shooting, problem solving, preventative maintenance, clearing jams, and cleaning & sanitation of all equipment on their assigned line. Completes the training and certification that qualifies the individual to perform the duties of operating the machines & equipment and inspection and use of the necessary materials and chemicals. Ensures all processes are completed to meet product quality, bio, company and BATF standards as well as customer satisfaction goals and inspects incoming materials on a continual basis. Uses World Class Manufacturing principles and best practices as the method to most effectively complete their work. Utilizes the appropriate personal communication and interaction skills required to work with others in a team-based environment to achieve the team's KPI's as well as Department, Plant, and Company goals. Performs minor preventative and corrective maintenance (autonomous maintenance), lubricates all machinery, troubleshoots and takes appropriate action or makes necessary operational adjustments to resolve issues, ensuring that the equipment is running efficiently producing quality product. Possesses the basic mechanical and technical skills to accomplish the required machine adjustments and maintenance. Reads and correctly interprets packaging schedules, understands and follows job procedures, work instructions, as well as special notices and/or instructions. Complete reporting concerning productivity, quality, safety, maintenance, line information, manpower schedules, station control, waste monitoring, and training records in an accurate, timely and legible manner. Performs a mixture of the following duties as required: line checks of equipment, accident investigation/follow up, hazard analysis, audits, attends meetings, and other duties as assigned by the business. May be required to work various shifts as determined by the business needs. May be required to train and certify other employees"
    type_of_hire: "Contract/Temp"
    description: "Various schedules available. $19.00 per hour to start, opportunity to earn raises. Located in Golden. Drug & background screen required."
  },
  {
    name: "Project Engineer",
    qualifications: "Bachelor’s degree in Mechanical or Chemical Engineering. 2+ years practical experience in mechanical design is preferred. Demonstrated 3D modeling software and CAD drafting experience preferred. Experience with water or wastewater treatment equipment is preferred. Experience with design for live loads, e.g., seismic and wind loads, desirable. Detailed knowledge of AutoCAD and Inventor or similar 3D modeling package preferred. Proficiency in standard business software including Microsoft Office and Outlook. Working knowledge of ERP & PLM systems preferred. Excellent writing, communication, and presentation skills
    Knowledge of ISO quality systems as well as improvement tools such as Lean Manufacturing and Six Sigma preferred. Experience with Value Engineering preferred."
    responsibilities: "Apply engineering and design skills and expertise and manage technical activities in the development and customization of water/wastewater treatment systems, with an emphasis on mechanical design, structural analysis, and systems integration. Enable client to meet external customer needs through coordination of design with internal groups such as Sales, Application Engineering, Production, Project Management, as well as external fabricators/suppliers and customers. To be a successful project engineer, you should have the ability to work with multiple discipline projects and demonstrate excellent project management, task management and design supervision skills."
    type_of_hire: "Direct Placement"
    description: "EIT/PE preferred. Up to 20% travel. $65k - 85k annually, DOE. In Golden, near Hwy 58 & McIntyre St. Drug & background screen required."
  },
  {
    name: "Field Service Mechanic",
    qualifications: "High School diploma. Must have thorough technical knowledge of assigned products. Experience with ISO9001 requirements desirable. 2 years technical training in area of specialty. 2 years field troubleshooting experience."
    responsibilities: "Services products and equipment as assigned. Starts up, identifies, analyzes and repairs instruments and products at customer’s location. Performs preventative maintenance, site surveys, installations and modifications as needed or requested by customers. Performs training at customer site. Troubleshoots basic control circuits. Determines parts to order for repairs and timeliness of need."
    type_of_hire: "Direct Placement"
    description: "Up to 90% travel. $40k - 59k annually, DOE. Shop located in Golden, travel will be required. Drug & background screen required."
  },
  {
    name: "Welder - 2nd Shift",
    qualifications: "Pass weld test for Flux Core & Stick (on the job experience required). Read & interpret blueprints. Fit & weld beams & troughs. Perform standard machine maintenance."
    responsibilities: "Flux-core & Stick welding on stainless steel. Read blueprints. Basic machine maintenance & repair. Fabrication.  General cleaning. Loading/unloading trucks. Assist machinists. Operate forklifts."
    type_of_hire: "Contract/Temp"
    description: "Monday - Thursday, 3:45pm to 2:15 am, overtime may be required on Fridays. $24 to 25.90, DOE. Located in Golden, near Hwy 93 & McIntyre St. Drug and background screening required."
  },
  {
    name: "Warehouse - Day Shift",
    qualifications: "Picking and Loading Product for outbound loads by hand and with equipment. Unloading, sorting, and labeling in bound product containers
    Responsible for helping to maintain cleanliness of Distribution Center
    Forklift, Cherry Picker. Miscellaneous tasks assigned by management. Helping in monthly and annual inventory counting"
    responsibilities: "Career-Minded, High in Integrity, Ethical, and Energetic. Available on Evenings/Weekends. Forklift/Cherry Picker certified a plus but not required. Able to consistently move 50-70lbs, up to 75lbs as needed. Steel Toed Boots Required."
    type_of_hire: "Contract/Temp"
    description: "Monday - Friday, 6am to finish (typically 8 - 12 hour day) overtime mandatory. $18.00 per hour. Located in Aurora near I-70 & E470. Drug & background screen required."
  },
  {
    name: "Machine / Laser Operator - 1st Shift",
    qualifications: "Operate the CNC laser cutting machine and support the production team by assembling parts, operating machinery, bending, punching or sawing of metal products as instructed by supervisor.
    Operate CNC laser cutting machines and other machinery used in the production process or assist other machine operators"
    responsibilities: "Setup machine based on material type and thickness, load programs and set machine parameters to ensure optimal performance of the equipment. Monitor fill level of bulk tank system and report reordering levels to the supervisor. Work with automated storage system. Check laser conditions before processing, edit conditions as necessary.. Perform regular maintenance and cleaning. Provide a great level of attention to detail and focus on the given task. Follow all safety rules and quality standards. Follow all company rules and policies. Work with team members to maximize productivity and efficiency. Assemble items as instructed by shift leader or floor supervisor. Prepare product for the next process. Operate machinery used in the production process, or assist machine operators. Operate and setup of the press brake. Understand and proficiently operate all press controls and related fabrication equipment. Verify quality of produced parts. Perform preventative maintenance as needed. Troubleshoot various machinery problems. Perform additional related duties as required, including secondary operations. Seek to improve production changeovers and reduce machine downtime "
    type_of_hire: "Contract/Temp"
    description: "Monday - Thursday, 5:30am to 4pm. $22 - 22.75 per hour, DOE. Located in Golden, near Hwy 58 & McIntyre St. Drug (No THC) & background screen required."
  },
])

# puts "💡 Seeding Interviews..."
# Interview.create!([
#   {
#     name:
#     email:
#     phone:
#     date: 
#     format: 
#     candidate_id:
#     job_id:
#   }
# ])


puts "Done seeding!"

