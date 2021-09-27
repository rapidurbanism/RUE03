# Rapid Urbanism Explorer: User Manual

This is version 0.3 of RUE. This version is an early prototype of the software. 

This document gives an overview of how to use the software.

## Overview

RUE has been tested on the Chrome browser.

The RUE explorer consist of four main parts: a regulatory input section, a spatial model output, 
a financial model output, and a multi-metric impact output.

1. The left side of the GUI portrays the regulatory sections, which (apart from the side definition)
   allows the user to define the values for all key parameters of the parametric model. The main
   purpose is to quantify legal attributes from development control regulations, with which the
   spatial model will confirm. This is useful both for diagnostic purposes (e.g. implications of
   policy alternatives) as well as design of specific project scenarios).
2. The spatial model starts with a site and uses a set of parametric scripts to generate a spatial
   model of the proposed development. The spatial model includes both the 3D geometry and a set of
   other data associated with that model. 
3. The financial model starts with the data generated by the spatial model and calculates various
   metrics relating to financial feasibility, socioeconomic inclusion, and environmental
   sustainability.
4. Finally, the financial, socioeconomic and environmental impact metrics are captured by a spider
   diagram, which provides rapid feedback to users on how balanced the active scenario is.

On the left hand side, the user enters a set of spatial/regulatory parameter values that drive the
spatial model. Clicking the _Apply_ button then updates the the spatial model, which in turn updates
the financial model.

The software is completely client-side. It does not perform any computation on the server. This
allows the software to be used anywhere, even in locations where Internet connectivity is poor. 

## Saving and Loading Simulations

The settings for a specific simulation can be saved and loaded as a RUE file (with a _.rue_
extension). 

The functionality is available under the three-bar menu button available in the top-left hand
corner.
- _New Simulation_: Start a new simulation.
- _Save Simulation_: Save the current simulation settings to a RUE file on your hard-disk.
- _Load Simulation_: Open previously saved simulation settings from a RUE file on your hard-disk.

## Site Definition

Version 0.3 of RUE includes three options for defining the project site. These are available under
the drop-down menu under _City > Site Definition_.
- VMC Site: Loads a default hard-coded site, to be used for demonstration purposes. This is the
  default option. 
- Load Site: Allows you to load a geojson file that specifies a custom site. See below for more
  information on the requirements of this site.
- Dummy Site: Create a simple quadrilateral site for testing and debugging, the same as the method
  used in version RUE 0.2.

## Geojson Input Files

The RUE03 scripts for generating spatial models are applicable to sites that run adjacent to an
main road. The main road is refer to as an `arterial` road. There may be zero or more `secondary`
roads, which are expected to run approximately perpendicular to the arterial road. 

The _City_ script require two Geojson files as inputs: the site file and the roads file. 
- The site file should contain just a single polygon. No attributes are required. One or more of the
  edges of the site polygon are expected to be adjacent to the arterial road defined in the roads
  file. 
- The roads file should contain a set of polylines, representing road centrelines. Two attributes
  are required: `road_type` and `road_pcent`
  - `road_type` is a string and can be either `art` indicating the arterial road, or `sec`
    indicating a secondary road. 
    - _Arterial road_ (`art`): There should only be one arterial polyline. The polyline will be used
      as the main axis for sub-dividing the site into blocks and partitions.
    - _Secondary roads_ (`sec`): There can be multiple secondary polylines. If these polylines cross
      the site, then they will be used to cut the site polygon into smaller polygons.
    - _Other roads_: Polylines that are neither `art` nor `sec` are assumed to be other roads, and
      are ignored.
  - `road_pcent` is number (a percentage between 0 and 100) that indicates the percentage of the
    road area to be attributed to the site. 0% indicates that the none of the road area falls within
    the site, 50% indicates that half the road falls within the site, and 100% indicates that the
    whole road falls within the site.

The site polygon and road polylines in the Geojson files need to be clean simple geometric objects.
The number of points used to define these geometric entities should be as few as possible.
(Geometric entities with many points very close together my cause errors or strange outcomes.)