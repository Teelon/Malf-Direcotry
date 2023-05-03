import { CollectionBeforeChangeHook } from 'payload/types';

import DatePicker from "react-datepicker";

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
  originalDoc, // original document
}) => {
  

  if(data.updateHistory){
data.history.push({
    name: data.name,
    department: data.department,
    position : data.position, 
  });
  }


  console.log(originalDoc, data);
  return data;// Return data to either create or update a document with
}





export default beforeChangeHook;