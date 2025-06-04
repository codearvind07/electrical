// pages/bus-ducts.tsx
import Image from 'next/image';
import { useMemo } from 'react';
import LTInstallation from './lt-installation';

const tags = [
  "ELECTRICAL POWER DISTRIBUTION", "REMOVING", "GREATEST ADVANTAGES", "STANDARD 10 FEET LENGTHS", "DUCT", "ELECTRICAL BUS BARS",
  "GROUP", "SUPPORTS", "METAL BAR", "BUS DUCT", "SAFELY CARRIED", "CURRENT", "MAXIMUM AMOUNT", "BUSBAR DETERMINES", 
  "CROSS SECTIONAL SIZE", "ELECTRICAL ELECTRICITY", "BATTERY BANK", "SUBSTATION", "SWITCHBOARD DISTRIBUTION BOARD", 
  "CONDUCTS ELECTRICITY", "ALUMINUM", "BRASS", "COPPER", "BAR", "TRIP", "BUS BAR", "BRANCH CIRCUIT", "REMOVING VOLTAGE"
];
function titleCase(str:string) {
  const exclude = ['in', 'and', 'or', 'the', 'of', 'on', 'at', 'a', 'an', 'for', 'to', 'with', 'by'];
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (exclude.includes(word) && index !== 0) {
        return word; // keep excluded words lowercase unless they are the first word
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');


}

const serviceDataJSON =[
    {
    image:"/services/fires-safety.png",
    category:"fire-fighting-works",
    description:"Fire fighting is the work which is done to extinguish fire. In this firefighter fights fires to prevent the loss of different type of stuff and also saves the destruction of our environment and the property. Fire hydrant systems are installed in buildings to help firefighters quickly attack the fire.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
 {
    image:"/services/fire-pump.jpg",
    category:"fire-pump-panel",
    description:"A fire alarm control panel (FACP), fire alarm control unit (FACU) or simply fire alarm panel is the controlling component of a fire alarm of a fire alarm system. The panel receives information from devices designed to detect and report fires, monitors their operational integrity and provides for automatic control of equipment and transmission of information necessary to prepare the facility for fire based on a predetermined sequence. A fire control panel is a component that offers control through a fire alarm or notification system. Throughout the building, sensors are installed. These sensors redirect information to this control panel. They include environmental changes that could detect the presence of a fire. The panel receives notification for potential for operational issues with equipment that could cause a fire. The panel also alerts the employees inside the building if a potential fire was detected or predicted.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
 {
    image:"/services/cable.png",
    category:"cable-tray",
    description:"In the electrical wiring of buildings, a cable tray system is used to support insulated electric cables used for power distribution and communication. Cable trays are used as and alternative to open commonly used for cable management in commercial and industrial construction. They are especially useful in situations where changes in a wiring system are anticipated, since new cables can be used instead of pulling them through a pipe.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},

{
    image:"/services/ltpanel.jpg",
    category:"main-lt-panel-with-plc",
    description:"DP Electricals provides the ultimate solution for your home - lighting. find the perfect mood for a specific room , from warm and cozy ambiences for living room lighting to bright energizing schemes for bathroom and kitchen lighting DP Electricals provide the perfect light for your home.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/ducts.png",
    category:"bus-ducts",
    description:"In electrical power distribution, a bus bar is a trip or bar of copper, brass or aluminum that conducts electricity within a switchboard distribution board , substation, battery bank or other electrical electricity. The cross sectional size of the busbar determines the maximum amount of current that can be safely carried .A bus duct is a metal bar that supports and contains a group of electrical bus bars. The duct comes in standard 10 feet lengths. The greatest advantages of removing a branch circuit without removing voltage from the whole duct.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/meter-board.jpg",
    category:"meter-board-panel",
    description:"Enclosures are fabricated in modular construction. Each bay is identical and can be assembled or dismantled easily in a shorter time which is not Feasible in total welded components too are fabricated in folded construction which too are Fabricated in folded construction which too are fabricated in minimum welding to avoid deformation of fabricated components beside stocking of critical fabrication components to expedite delivery of panels. The components are totally interchangeable and offer instant replacement if required. Electroplated slotted supports are provided in cable for binding of cables.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/apfc.png",
    category:"apfc-automatic-power-factor-control-panels",
    description:"Modern power network consists of wide variety of electrical and power electronics load in case of such varying loads, the power factor also varies as a function of the load requirement it can lead to situation where the installation can have a low power factor leading to higher demand charges and levy of power factor penalties. It is therefore necessary to automatically vary, without Manual intervention, the compensation on automatic power Factor correction (APFC) system which can manual Consistently high power factor without any manual Intervention APFC products are fully automatic in operation and can be used to achieve, consistently high power factor under fluctuating load consumption in the installation by installation.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/control-desk.png",
    category:"control-desks",
    description:"Control desk is used where operation is on a different side from the panel. Out panels are suitable as per height for human operation and spacious operation desk, easy to operate by hand, made from good quality base Push button & Indicators. Connection details fixing a panel's Door.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/ac-dc.png",
    category:"ac-dc-drives",
    description:"Your choice depends on many application —specific factors such as ambient conditions, Type of loads, duty cycle, maintenance accessibility, horsepower range sequencing and more. Brief guidelines have been developed to provide you with a basic understanding Of the differences between ac and dc drive technologies. If you have specific Question or require application /selection assistance, please inquire for further Assistance form us.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/generator-panels.png",
    category:"generator-panels",
    description:"A complex machine requires a user interface to enable the user to monitor its operations, check for efficient functioning and intervene when required. Machines overheat slow down, speed up or generally vary in their performance based on numerous factors vary in their performance based on numerous factors such as fatigue, weather conditions and the wear and tear as component and parts. Modern generators also have similar sensor to detect modern generators and tear of similar sensors to detect changes in all used to control the generatorthrough a generator control panel.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/synchronizing-panel.png",
    category:"synchronizing-panel",
    description:"Synchronizing Panels we know is important from the Point of view how load sharing between different Unit' s takes place and load transfer during the Maintenance is important. Panels require two or more Different sources of power likewise between DG SETS and the main GRID set synchronizing panels is used where one DG set synchronizing with two or more DG set when mains fail all DG start at a time but after some time one will be on & other will be stop as per load demand . When load increases above 70% of the total load the 2nd dg will be started & it synchronizes with first one & this load was distributed equally on that two DG set & this process during low load we can run any single unit and will go on and synchronize more units as the load increases. This can be manual or automatic.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/distribution-boards.png",
    category:"distribution-boards",
    description:"A distribution board (or panel board is a component of an electricity supply system which divides an electrical power into other circuits, it has a key in supplying power and protecting permanently installed equipment for building such as power and lighting facilities while providing a protective fuse or circuit breaker for each circuit, in a common enclosure.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/amf-auto-main-failure-panel.png",
    category:"amf-auto-main-failure-panel",
    description:"AMF panel is the short of main failure. It is normally connected tothe function. It can call the generator set if the AMF further connected to the main switch board (received power form the other source normally form the local authority which equipped with auto transfer switch / automatic changeover contactor while supply to main switch board failed, the AMF board will send the power failure signal to generator set the will run and serve the supply to main switch board.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
{
    image:"/services/electronic-panels.png",
    category:"electronic-panels",
    description:"We design electronic monitoring and control panels. These can be electronic electrical, mechanical or any combination thereof we can custom to accomplish customer requirements based on supplied design criteria.",
    tage:[
  "fire fighting", "buildings", "installed", "fire hydrant systems", "property", "environment",
  "destruction", "firefighters", "quickly", "attack", "saves", 
]
},
]



export default function ServiceSection({category,location}:{category:any,location:any}) {
    const filterData = useMemo(()=>{

        const filter= serviceDataJSON.find((item)=>item.category===category)
        console.log(">>>>>>>>filter",filter);
        return filter

    },[category])
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Banner Section */}
      <div className="bg-gray-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">
  Best {titleCase(category.split("-").join(' '))} in {titleCase(location)}
</h1>
      </div>

      {/* Content Section */}
      <div className=" mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-col items-start gap-8">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={filterData?.image} // Replace with actual image path or external URL
              alt={category}
              
              className="rounded shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
           
            <p className="text-gray-700 leading-relaxed pb-3">
             {filterData?.description}
            </p>
             <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold mb-4">
              ENQUIRE NOW
            </button>
          </div>
        </div>

        {/* Tags Section */}
        {category==="distribution-boards" && (

        <LTInstallation />
        )}
        {/* <div className="mt-12 border-t pt-6">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-orange-50 border border-orange-200 text-orange-500 text-sm font-medium px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
