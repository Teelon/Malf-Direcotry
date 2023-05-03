import { CollectionConfig } from "payload/types";

const Departments:CollectionConfig = {
  slug: 'department',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Department Name'
    },
  ],
}

export default Departments;