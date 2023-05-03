import { CollectionConfig } from "payload/types";

const Positions: CollectionConfig = {
  slug: 'position',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Position Name'
    },
  ],
}

export default Positions;