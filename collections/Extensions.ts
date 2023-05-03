import beforeChangeHook from "../hooks/updateExtension";
import { CollectionConfig } from "payload/types";

const Extensions : CollectionConfig = {
  slug: 'extension',
  admin: {
    useAsTitle: 'ext',
  },
  hooks:{
    beforeChange:[(args)=>{
      beforeChangeHook(args);
    }]
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name Of Employee'
    },
    {
      name: 'ext',
      type: 'text',
      unique: true,
      required:true,
     /*  admin: {
        readOnly:true
      } */
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo:'department'
    },
    {
      name: 'position',
      type: 'relationship',
      relationTo:'position'
    },
    {
      name:'updateHistory',
      type:'checkbox',
      label:'Update History',
      defaultValue: false
    },
    {
      name:'history',
      type: 'array',
      fields:[ {
        name: 'name',
        type: 'text',
        label: 'Name Of Employee'
      },
        {
          name: 'department',
          type: 'relationship',
          relationTo:'department'
        },
        {
          name: 'position',
          type: 'relationship',
          relationTo:'position'
        },
        {
          name: 'dateUpdated',
          type: 'date',
          /* admin:{
            readOnly:true
          } */
        },
      ]
    }
  ],
}

export default Extensions;