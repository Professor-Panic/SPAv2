 import React from "react";
 import { useState,useEffect } from "react";
 export function AddProject({update,new_project}) {
 	update(previous_projects => {
    return [...previous_projects, new_project];
	});	
 }