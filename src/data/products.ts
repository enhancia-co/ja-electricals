import type { Product } from "../types/types";

// Power Components
import mcb from "../assets/products/miniature-circuit-breakers.png";
import mccb from "../assets/products/molded-case-circuit-breaker.png";
import acb from "../assets/products/air-circuit-breaker.png";
import safetyDisconnectSwitch from "../assets/products/safety-disconnect-switch.jpg";
import contactorOverloadRelay from "../assets/products/overload-relay.jpg";

// // Panel Manufacturing
import mainDistributionBoardMdb from "../assets/products/main-distribution-board.png";
import automaticTransferSwitchAts from "../assets/products/automatic-transfer-switch.png";
import motorControlCenterMcc from "../assets/products/mcc-motor-control-center.png";
import plcPanel from "../assets/products/plc-panel.png";
import switchgearPanel from "../assets/products/switchgear-panel.png";
import synchronizingPanel from "../assets/products/synchronizing-panel.png";

// // CableTray Accessories
import cableTrayAndCovers from "../assets/products/cable-tray-and-covers.png";
import trayElbowsAndBends from "../assets/products/tray-elbows-and-bends.png";
import trayTeesAndCrosses from "../assets/products/tray-tees-and-crosses.png";
import trayConnectors from "../assets/products/tray-connectors.png";
import cableTraySupportsAndHangers from "../assets/products/cable-tray-supports-and-hangers.png";
import traySplicePlates from "../assets/products/tray-splice-plates.jpg";
import cableTrayFastenersAndClamps from "../assets/products/cable-tray-fasteners-and-clamps.png";

// // Industrial Sensor
import proximitySensor from "../assets/products/proximity-sensor.png";
import temperatureSensor from "../assets/products/temperature-sensor.png";
import pressureSensor from "../assets/products/pressure-sensor.jpeg";
import levelSensor from "../assets/products/level-sensor.png";
import flowSensor from "../assets/products/flow-sensor.png";
import vibrationSensor from "../assets/products/vibration-sensor.jpg";
import forceAndTorqueSensor from "../assets/products/force-and-torque-sensor.jpg";
import gasAndChemicalSensor from "../assets/products/gas-and-chemical-sensor.png";
import positionAndDisplacementSensor from "../assets/products/position-and-displacement-sensor.png";
import opticalSensor from "../assets/products/optical-sensor.png";
import humiditySensor from "../assets/products/humidity-sensor.jpg";
import visionSensor from "../assets/products/vision-sensor.png";

// // PLC Types
import modularPlc from "../assets/products/modular-plc.png";
import compactPlc from "../assets/products/compact-plc.jpeg";
import rackMountedPlc from "../assets/products/rack-mounted-plc.png";
import softPlc from "../assets/products/soft-plc.png";
import hybridPlc from "../assets/products/hybrid-plc.png";

// // Temperature Sensors
import thermocoupleSensor from "../assets/products/thermocouple-sensor.jpeg";
import rtdSensor from "../assets/products/rtd-sensor.png";
import thermistorSensor from "../assets/products/thermistor-sensor.png";
import infraredTemperatureSensor from "../assets/products/infrared-temperature-sensor.png";
import semiconductorTemperatureSensor from "../assets/products/semiconductor-temperature-sensor.png";
import bimetallicStripSensor from "../assets/products/bimetallic-strip-sensor.png";
import liquidInGlassThermometer from "../assets/products/liquid-in-glass-thermometer.png";
import fiberOpticTemperatureSensor from "../assets/products/fiber-optic-temperature-sensor.png";
import liquidCrystalTemperatureSensor from "../assets/products/liquid-crystal-temperature-sensor.png";
import temperatureTransducer from "../assets/products/temperature-transducer.png";

// // Power & Control Cable
import flexiblePowerCable from "../assets/products/flexible-power-cable.png";
import xlpePvcHighVoltageCable from "../assets/products/xlpe-pvc-high-voltage-cable.png";
import controlCableAndWire from "../assets/products/control-cable-and-wire.png";
import shieldedCable from "../assets/products/shielded-cable.png";
import heatResistantCable from "../assets/products/heat-resistant-cable.png";

// // Communication Cables
import twistedPairCable from "../assets/products/twisted-pair-cable.png";
import coaxialCable from "../assets/products/coaxial-cable.png";
import fiberOpticCable from "../assets/products/fiber-optic-cable.png";
import serialCommunicationCable from "../assets/products/serial-communication-cable.png";
import poePowerOverEthernetCable from "../assets/products/poe-power-over-ethernet-cable.png";
import industrialCommunicationCable from "../assets/products/industrial-communication-cable.png";

// // Panel Climate Controls
// Terminal Blocks
import terminalBlocks from "../assets/products/terminal-blocks.png";
import cableTrunking from "../assets/products/cable-trunking.png";
import cableTies from "../assets/products/cable-ties.png";
import cableLugs from "../assets/products/cable-lugs.png";
import dinRail from "../assets/products/din-rail.png";
import cableDuct from "../assets/products/cable-duct.png";
import cableFerrules from "../assets/products/cable-ferrules.png";

// // Safety Materials
import ppePersonalProtectiveEquipment from "../assets/products/personal-protective-equipment.png";
import respiratoryProtection from "../assets/products/respiratory-protection.png";
import fireSafetyMaterials from "../assets/products/fire-safety-materials.png";
import chemicalSafetyMaterials from "../assets/products/chemical-safety-materials.png";
import electricalSafetyMaterials from "../assets/products/electrical-safety-materials.png";
import trafficRoadSafetyMaterials from "../assets/products/traffic-road-safety-materials.png";



export const products: Product[] = [
  // POWER COMPONENTS
  {
    id: 1,
    title: 'Miniature Circuit Breakers (MCB)',
    description: 'Reliable protection for electrical circuits against overload and short circuits.',
    image: mcb,
    category: 'Power Components'
  },
  {
    id: 2,
    title: 'Molded Case Circuit Breakers (MCCB)',
    description: 'High-capacity circuit breakers for industrial and commercial applications.',
    image: mccb,
    category: 'Power Components'
  },
  {
    id: 3,
    title: 'Air Circuit Breakers (ACB)',
    description: 'Heavy-duty circuit breakers for large-scale power distribution.',
    image: acb,
    category: 'Power Components'
  },
  {
    id: 4,
    title: 'Safety/Disconnect Switches',
    description: 'Switches designed for safe disconnection of electrical circuits.',
    image: safetyDisconnectSwitch,
    category: 'Power Components'
  },
  {
    id: 5,
    title: 'Contactors & Overloads',
    description: 'Essential components for motor control and overload protection.',
    image: contactorOverloadRelay,
    category: 'Power Components'
  },

  // Panel Manufacturing
  {
    id: 6,
    title: 'MDB (Main Distribution Board)',
    description: 'Centralized panel for power distribution in buildings.',
    image: mainDistributionBoardMdb,
    category: 'Panel Manufacturing'
  },
  {
    id: 7,
    title: 'ATS (Automatic Transfer Switch)',
    description: 'Automatically switches power sources for uninterrupted supply.',
    image: automaticTransferSwitchAts,
    category: 'Panel Manufacturing'
  },
  {
    id: 8,
    title: 'MCC (Motor Control Center)',
    description: 'Panel for controlling multiple electric motors in a central location.',
    image: motorControlCenterMcc,
    category: 'Panel Manufacturing'
  },
  {
    id: 9,
    title: 'PLC (Programmable Logic Controller) Panel',
    description: 'Panel housing PLCs for automation and process control.',
    image: plcPanel,
    category: 'Panel Manufacturing'
  },
  {
    id: 10,
    title: 'Switchgear Panel',
    description: 'Panel for controlling, protecting, and isolating electrical equipment.',
    image: switchgearPanel,
    category: 'Panel Manufacturing'
  },
  {
    id: 11,
    title: 'Synchronizing Panel',
    description: 'Panel for synchronizing multiple generators or power sources.',
    image: synchronizingPanel,
    category: 'Panel Manufacturing'
  },

  // CableTray Accessories
  {
    id: 12,
    title: 'Cable Tray & Covers',
    description: 'Support system for managing and protecting cables.',
    image: cableTrayAndCovers,
    category: 'CableTray Accessories'
  },
  {
    id: 13,
    title: 'Elbows and Bends',
    description: 'Accessories for changing direction of cable trays.',
    image: trayElbowsAndBends,
    category: 'CableTray Accessories'
  },
  {
    id: 14,
    title: 'Tees and Crosses',
    description: 'Junction accessories for cable tray systems.',
    image: trayTeesAndCrosses,
    category: 'CableTray Accessories'
  },
  {
    id: 15,
    title: 'Connectors',
    description: 'Connects different sections of cable trays.',
    image: trayConnectors,
    category: 'CableTray Accessories'
  },
  {
    id: 16,
    title: 'Cable Tray Supports and Hangers',
    description: 'Support and suspend cable trays securely.',
    image: cableTraySupportsAndHangers,
    category: 'CableTray Accessories'
  },
  {
    id: 17,
    title: 'Splice Plates',
    description: 'Join and reinforce cable tray sections.',
    image: traySplicePlates,
    category: 'CableTray Accessories'
  },
  {
    id: 18,
    title: 'Cable Tray Fasteners & Clamps',
    description: 'Fastening and clamping accessories for cable trays.',
    image: cableTrayFastenersAndClamps,
    category: 'CableTray Accessories'
  },

  // INDUSTRIAL SENSOR
  {
    id: 19,
    title: 'Proximity Sensors',
    description: 'Detects the presence of nearby objects without physical contact.',
    image: proximitySensor,
    category: 'Industrial Sensor'
  },
  {
    id: 20,
    title: 'Temperature Sensors',
    description: 'Measures temperature for industrial processes.',
    image: temperatureSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 21,
    title: 'Pressure Sensors',
    description: 'Measures pressure in gases or liquids.',
    image: pressureSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 22,
    title: 'Level Sensors',
    description: 'Detects the level of substances in containers.',
    image: levelSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 23,
    title: 'Flow Sensors',
    description: 'Measures the flow rate of liquids or gases.',
    image: flowSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 24,
    title: 'Vibration Sensors',
    description: 'Detects vibration in machines and structures.',
    image: vibrationSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 25,
    title: 'Force and Torque Sensors',
    description: 'Measures force and torque in mechanical systems.',
    image: forceAndTorqueSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 26,
    title: 'Gas and Chemical Sensors',
    description: 'Detects gases and chemicals in the environment.',
    image: gasAndChemicalSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 27,
    title: 'Position and Displacement Sensors',
    description: 'Measures position or displacement of objects.',
    image: positionAndDisplacementSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 28,
    title: 'Optical Sensors',
    description: 'Detects light or changes in light.',
    image: opticalSensor,
    category: 'Industrial Sensor'
  },
  {
    id: 29,
    title: 'Humidity Sensors',
    description: 'Measures the amount of moisture in the air.',
    image: humiditySensor,
    category: 'Industrial Sensor'
  },
  {
    id: 30,
    title: 'Vision Sensors',
    description: 'Used for image processing and object detection.',
    image: visionSensor,
    category: 'Industrial Sensor'
  },

  // Programmable Logic Controllers (PLC)
  {
    id: 31,
    title: 'Modular PLCs',
    description: 'Flexible PLCs with expandable modules for various applications.',
    image: modularPlc,
    category: 'Programmable Logic Controllers (PLC)'
  },
  {
    id: 32,
    title: 'Compact PLCs',
    description: 'Space-saving PLCs for small automation tasks.',
    image: compactPlc,
    category: 'Programmable Logic Controllers (PLC)'
  },
  {
    id: 33,
    title: 'Rack Mounted PLCs',
    description: 'PLCs designed for rack mounting in control panels.',
    image: rackMountedPlc,
    category: 'Programmable Logic Controllers (PLC)'
  },
  {
    id: 34,
    title: 'Soft PLCs',
    description: 'Software-based PLCs for PC-based automation.',
    image: softPlc,
    category: 'Programmable Logic Controllers (PLC)'
  },
  {
    id: 35,
    title: 'Hybrid PLCs',
    description: 'PLCs combining features of both hardware and software PLCs.',
    image: hybridPlc,
    category: 'Programmable Logic Controllers (PLC)'
  },

  // Temperature Sensors
  {
    id: 36,
    title: 'Thermocouples',
    description: 'Temperature sensors using thermoelectric effect for measurement.',
    image: thermocoupleSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 37,
    title: 'Resistance Temperature Detectors (RTDs)',
    description: 'Accurate temperature sensors using resistance change.',
    image: rtdSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 38,
    title: 'Thermistors',
    description: 'Temperature sensors with resistance varying by temperature.',
    image: thermistorSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 39,
    title: 'Infrared (IR) Temperature Sensors',
    description: 'Non-contact temperature measurement using infrared.',
    image: infraredTemperatureSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 40,
    title: 'Semiconductor Temperature Sensors',
    description: 'Electronic sensors for temperature measurement.',
    image: semiconductorTemperatureSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 41,
    title: 'Bimetallic Strips',
    description: 'Mechanical temperature sensors using two metals.',
    image: bimetallicStripSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 42,
    title: 'Liquid-in-Glass Thermometers',
    description: 'Traditional thermometers using liquid expansion.',
    image: liquidInGlassThermometer,
    category: 'Temperature Sensors'
  },
  {
    id: 43,
    title: 'Fiber Optic Temperature Sensors',
    description: 'Sensors using fiber optics for temperature measurement.',
    image: fiberOpticTemperatureSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 44,
    title: 'Liquid Crystal Temperature Sensors',
    description: 'Sensors using liquid crystals to indicate temperature.',
    image: liquidCrystalTemperatureSensor,
    category: 'Temperature Sensors'
  },
  {
    id: 45,
    title: 'Temperature Transducers',
    description: 'Devices converting temperature to electrical signals.',
    image: temperatureTransducer,
    category: 'Temperature Sensors'
  },

  // Power & Control Cable
  {
    id: 46,
    title: 'Flexible Power Cable',
    description: 'Cables designed for flexible power transmission.',
    image: flexiblePowerCable,
    category: 'Power & Control Cable'
  },
  {
    id: 47,
    title: 'XLPE/PVC Medium/High Voltage Cables',
    description: 'Cables for medium and high voltage power transmission.',
    image: xlpePvcHighVoltageCable,
    category: 'Power & Control Cable'
  },
  {
    id: 48,
    title: 'Control Cables & Wires',
    description: 'Cables for control and instrumentation applications.',
    image: controlCableAndWire,
    category: 'Power & Control Cable'
  },
  {
    id: 49,
    title: 'Shielded Cables',
    description: 'Cables with shielding for noise reduction.',
    image: shieldedCable,
    category: 'Power & Control Cable'
  },
  {
    id: 50,
    title: 'Heat Resistant Cables',
    description: 'Cables designed to withstand high temperatures.',
    image: heatResistantCable,
    category: 'Power & Control Cable'
  },

  // Communication Cables
  {
    id: 51,
    title: 'Twisted Pair Cables',
    description: 'Cables for data and voice transmission.',
    image: twistedPairCable,
    category: 'Communication Cables'
  },
  {
    id: 52,
    title: 'Coaxial Cables',
    description: 'Cables for high-frequency signal transmission.',
    image: coaxialCable,
    category: 'Communication Cables'
  },
  {
    id: 53,
    title: 'Fiber Optic Cables',
    description: 'Cables for high-speed data transmission using light.',
    image: fiberOpticCable,
    category: 'Communication Cables'
  },
  {
    id: 54,
    title: 'Serial Communication Cables',
    description: 'Cables for serial data communication.',
    image: serialCommunicationCable,
    category: 'Communication Cables'
  },
  {
    id: 55,
    title: 'Power over Ethernet (PoE) Cables',
    description: 'Cables that deliver both power and data over Ethernet.',
    image: poePowerOverEthernetCable,
    category: 'Communication Cables'
  },
  {
    id: 56,
    title: 'Industrial Communication Cables',
    description: 'Cables for industrial networking and communication.',
    image: industrialCommunicationCable,
    category: 'Communication Cables'
  },

  // Panel Climate Controls
  {
    id: 57,
    title: 'Terminal Blocks',
    description: 'Connects and secures electrical wires in panels.',
    image: terminalBlocks,
    category: 'Panel Climate Controls'
  },
  {
    id: 58,
    title: 'Cable Trunks',
    description: 'Organizes and protects cables in panels.',
    image: cableTrunking,
    category: 'Panel Climate Controls'
  },
  {
    id: 59,
    title: 'Cable Ties',
    description: 'Secures cables and wires together.',
    image: cableTies,
    category: 'Panel Climate Controls'
  },
  {
    id: 60,
    title: 'Cable Lugs',
    description: 'Connects cables to electrical appliances and panels.',
    image: cableLugs,
    category: 'Panel Climate Controls'
  },
  {
    id: 61,
    title: 'DIN Rail',
    description: 'Standard mounting rail for panel components.',
    image: dinRail,
    category: 'Panel Climate Controls'
  },
  {
    id: 62,
    title: 'Cable Duct',
    description: 'Channels for routing and protecting cables.',
    image: cableDuct,
    category: 'Panel Climate Controls'
  },
  {
    id: 63,
    title: 'Cable Ferrules',
    description: 'End sleeves for wire connections.',
    image: cableFerrules,
    category: 'Panel Climate Controls'
  },

  // Safety Materials
  {
    id: 64,
    title: 'Personal Protective Equipment (PPE)',
    description: 'Equipment worn to minimize exposure to hazards.',
    image: ppePersonalProtectiveEquipment,
    category: 'Safety Materials'
  },
  {
    id: 65,
    title: 'Respiratory Protection',
    description: 'Masks and respirators for breathing safety.',
    image: respiratoryProtection,
    category: 'Safety Materials'
  },
  {
    id: 66,
    title: 'Fire Safety Materials',
    description: 'Products for fire prevention and protection.',
    image: fireSafetyMaterials,
    category: 'Safety Materials'
  },
  {
    id: 67,
    title: 'Chemical Safety Materials',
    description: 'Materials for safe handling of chemicals.',
    image: chemicalSafetyMaterials,
    category: 'Safety Materials'
  },
  {
    id: 68,
    title: 'Electrical Safety Materials',
    description: 'Products for electrical hazard protection.',
    image: electricalSafetyMaterials,
    category: 'Safety Materials'
  },
  {
    id: 69,
    title: 'Traffic and Road Safety Materials',
    description: 'Materials for road and traffic safety.',
    image: trafficRoadSafetyMaterials,
    category: 'Safety Materials'
  }
]; 


export const featuredProducts = [
  // Power Components
  {
    id: 1,
    title: 'Miniature Circuit Breakers (MCB)',
    description: 'Reliable protection for electrical circuits against overload and short circuits.',
    image: mcb,
    category: 'Power Components'
  },
  // Panel Manufacturing
  {
    id: 6,
    title: 'MDB (Main Distribution Board)',
    description: 'Centralized panel for power distribution in buildings.',
    image: mainDistributionBoardMdb,
    category: 'Panel Manufacturing'
  },
  // CableTray Accessories
  {
    id: 12,
    title: 'Cable Tray & Covers',
    description: 'Support system for managing and protecting cables.',
    image: cableTrayAndCovers,
    category: 'CableTray Accessories'
  },
  // Industrial Sensor
  {
    id: 19,
    title: 'Proximity Sensors',
    description: 'Detects the presence of nearby objects without physical contact.',
    image: proximitySensor,
    category: 'Industrial Sensor'
  },
  // Programmable Logic Controllers (PLC)
  {
    id: 31,
    title: 'Modular PLCs',
    description: 'Flexible PLCs with expandable modules for various applications.',
    image: modularPlc,
    category: 'Programmable Logic Controllers (PLC)'
  },
  // Temperature Sensors
  {
    id: 36,
    title: 'Thermocouples',
    description: 'Temperature sensors using thermoelectric effect for measurement.',
    image: thermocoupleSensor,
    category: 'Temperature Sensors'
  },
  // Power & Control Cable
  {
    id: 46,
    title: 'Flexible Power Cable',
    description: 'Cables designed for flexible power transmission.',
    image: flexiblePowerCable,
    category: 'Power & Control Cable'
  },
  // Communication Cables
  {
    id: 51,
    title: 'Twisted Pair Cables',
    description: 'Cables for data and voice transmission.',
    image: twistedPairCable,
    category: 'Communication Cables'
  },
  // Panel Climate Controls
  {
    id: 57,
    title: 'Terminal Blocks',
    description: 'Connects and secures electrical wires in panels.',
    image: terminalBlocks,
    category: 'Panel Climate Controls'
  },
  // Safety Materials
  {
    id: 64,
    title: 'Personal Protective Equipment (PPE)',
    description: 'Equipment worn to minimize exposure to hazards.',
    image: ppePersonalProtectiveEquipment,
    category: 'Safety Materials'
  }
];