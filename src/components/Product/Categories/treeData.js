import React from 'react';
import api from '../../../apis/api'

// api.get('category/get').then(res=>{
// }).catch(err=>{
//   console.log("error fetching categories")
// })

const treeData = [
  {
    title: '`title`',
    subtitle: '`subtitle`',
    expanded: true,
    children: [
      {
        title: 'Child Node',
        subtitle: 'Defined in `children` array belonging to parent',
      },
      
    ],
  },

  {
    title: 'Advanced',
    subtitle: 'Settings, behavior, etc.',
    children: [
      {
        title: (
          <button>
            buttn
          </button>
        ),
      },
      // {
      //   expanded: true,
      //   title: 'Limit nesting with `maxDepth`',
      //   subtitle: `It's set to ${maxDepth} for this example`,
      //   children: [
      //     {
      //       expanded: true,
      //       title: renderDepthTitle,
      //       children: [
      //         {
      //           expanded: true,
      //           title: renderDepthTitle,
      //           children: [
      //             { title: renderDepthTitle },
      //             {
      //               title: ({ path }) =>
      //                 path.length >= maxDepth
      //                   ? 'This cannot be dragged deeper'
      //                   : 'This can be dragged deeper',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   title: 'Disable dragging on a per-node basis with the `canDrag` prop',
      //   subtitle: 'Or set it to false to disable all dragging.',
      //   noDragging: true,
      // },
      // {
      //   title: 'You cannot give this children',
      //   subtitle:
      //     'Dropping is prevented via the `canDrop` API using `nextParent`',
      //   noChildren: true,
      // },
      // {
      //   title:
      //     'When node contents are really long, it will cause a horizontal scrollbar' +
      //     ' to appear. Deeply nested elements will also trigger the scrollbar.',
      // },
    ],
  },
];

export default treeData;
