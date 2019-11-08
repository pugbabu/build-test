const cabinetConfiguration = [
  {
    sides:'double',
    locationInfo:{
      stationName: '文泽路站',
      stationId: '22',
      roomIndex: '303',
      row: '2行',
      column:'3列'
    },
    front:[{
      type: 'other',
      align:'horizonText',
      slots:[
        // slot1
        {
          id:'1001',
          styles: {
            'height': '18px',
            'width': '336px',
            'line-height':'18px'
          },
          children: [{text: 'TAU'}]
        },
      ]
    },
// cage2
      {
        align:'horizonText',
        slots:[
          // slot1
          {
            id:'2001',
            styles: {
              'height': '18px',
              'width': '336px',
              'line-height':'18px'
            },
            children: [{text: '理线框'}]
          },
        ],
      },
// cage3
      {
        type:'battery',
        slots:[
          // slot1
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [
              {
                id:'3007',
                text: 'A1'
              },
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }
            ]
          },
          // slot2
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [
              {
                id:'3008',
                text: 'A2'
              },
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }]
          },
          // slot3
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '144px',
              position: 'relative',
              background: '#EEEEEE',
            },
            children: [
              {
                styles: {
                  position: 'absolute',
                  top:'15px',
                  left: '59px',
                  height: '10px',
                  'line-height': '10px'
                },
                text:'自动'
              },
              {
                styles: {
                  position: 'absolute',
                  top:'3px',
                  left: '58px',
                  height: '10px',
                  'line-height': '10px'
                },
                text:'A'
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'3px',
                  left: '79px',
                  height: '10px'
                },
                text:'B'
              },
              {
                id:'3006',
                styles:{
                  position: 'absolute',
                  top:'3px',
                  left: '67px',
                  height:'10px',
                  width:'10px'
                },
                img:'batterySwitch.svg'
              },
              {
                id:'3001',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'3px',
                  left: '21px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'15px',
                  left: '8px',
                  height: '10px'
                },
                text:'A系主机'
              },
              {
                id:'3002',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'29px',
                  left: '21px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'41px',
                  left: '8px',
                  height: '10px'
                },
                text:'A系运行'
              },
              {
                id:'3003',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'29px',
                  left: '67px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'41px',
                  left: '60px',
                  height: '10px'
                },
                text:'同步'
              },
              {
                id:'3004',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'29px',
                  left: '113px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'41px',
                  left: '96px',
                  height: '10px'
                },
                text:'B系运行'
              },
              {
                id:'3005',
                styles: {
                  background:'#CCCCCC',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'3px',
                  left: '113px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'15px',
                  left: '96px',
                  height: '10px'
                },
                text:'B系主机'
              }
            ]

          },
          // slot4
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [{id:'3009',text: 'B1'},
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }]
          },
          // slot5
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [{id:'3010',text: 'B2'},
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }]
          }
        ]
      },
// cage4
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '36px',
              'line-height': '36px',
              'width': '336px',
              letterSpacing:'1px'

            },
            children: [{id:'5001',text: '导风机框'}]
          }
        ]
      },
// cage5
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'4001',
            styles: {
              'height': '54px',
              'width': '24px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'4002',
            styles: {
              display:'table-cell',
              'height': '54px',
              'width': '24px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            id:'4003',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          },
          // slot4
          {
            id:'4004',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            id:'4005',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            id:'4006',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot7
          {
            id:'4007',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot8
          {
            id:'4008',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot9
          {
            id:'4009',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            id:'4010',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot11
          {
            id:'4011',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            id:'4012',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [
              {
                text: 'V I B'
              }
            ]
          },
          // slot13
          {
            id:'4013',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot14
          {
            id:'4014',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot15
          {
            id:'4015',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot16
          {
            id:'4016',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot17
          {
            id:'4017',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#E50000 '
            },
            children: [{text: 'C P S U'}]
          },
          // slot18
          {
            id:'4018',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
        ]
      },
// cage6
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '18px',
              'line-height': '18px',
              'width': '336px'
            },
            children: [{text: '风扇'}]
          }
        ]
      },
// cage7
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'5001',
            styles: {
              'height': '54px',
              'width': '24px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'5002',
            styles: {
              display:'table-cell',
              'height': '54px',
              'width': '24px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#36AB60'
            },
            children: [{text: 'S W U'}]
          },
          // slot4
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot7
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot8
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot9
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot11
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            styles: {

              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [
              {
                text: 'V I B'
              }
            ]
          },
          // slot13
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot14
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot15
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot16
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot17
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#E50000 '
            },
            children: [{text: 'C P S U'}]
          },
          // slot18
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
        ]
      }
      ,

// cage8
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '18px',
              'line-height': '18px',
              'width': '336px'
            },
            children: [{text: '理线框'}]
          }
        ]
      }
      ,
// cage9
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '108px',
              'line-height': '108px',
              'width': '336px'
            },
            children: [{text: 'VIU机笼'}]
          }
        ]
      },
// cage10
      {
        align:'horizonText',
        slots:[
          // slot1
          {
            styles: {
              'height': '54px',
              'line-height': '54px',
              'width': '336px'
            },
            children: [{text: 'BTM'}]
          }
        ]
      }],
    back:[{
      type: 'other',
      align:'horizonText',
      slots:[
        // slot1
        {
          id:'11001',
          styles: {
            'height': '18px',
            'width': '336px',
            'line-height':'18px'
          },
          children: [{text: '  '}]
        },
      ]
    },
// cage2
      {
        align:'horizonText',
        slots:[
          // slot1
          {
            id:'12001',
            styles: {
              'height': '18px',
              'width': '336px',
              'line-height':'18px'
            },
            children: [{text: '  '}]
          },
        ],
      },
// cage3
      {
        type:'battery',
        slots:[
          // slot1
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [
              {
                id:'13007',
                text: 'A1'
              },
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }
            ]
          },
          // slot2
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [
              {
                id:'13008',
                text: 'A2'
              },
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }]
          },
          // slot3
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '144px',
              position: 'relative',
              background: '#EEEEEE',
            },
            children: [
              {
                styles: {
                  position: 'absolute',
                  top:'15px',
                  left: '59px',
                  height: '10px',
                  'line-height': '10px'
                },
                text:'自动'
              },
              {
                styles: {
                  position: 'absolute',
                  top:'3px',
                  left: '58px',
                  height: '10px',
                  'line-height': '10px'
                },
                text:'A'
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'3px',
                  left: '79px',
                  height: '10px'
                },
                text:'B'
              },
              {
                id:'13006',
                styles:{
                  position: 'absolute',
                  top:'3px',
                  left: '67px',
                  height:'10px',
                  width:'10px'
                },
                img:'batterySwitch.jpg'
              },
              {
                id:'13001',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'3px',
                  left: '21px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'15px',
                  left: '8px',
                  height: '10px'
                },
                text:'A系主机'
              },
              {
                id:'13002',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'29px',
                  left: '21px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'41px',
                  left: '8px',
                  height: '10px'
                },
                text:'A系运行'
              },
              {
                id:'13003',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'29px',
                  left: '67px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'41px',
                  left: '60px',
                  height: '10px'
                },
                text:'同步'
              },
              {
                id:'13004',
                styles: {
                  background:'#36AB60',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'29px',
                  left: '113px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'41px',
                  left: '96px',
                  height: '10px'
                },
                text:'B系运行'
              },
              {
                id:'13005',
                styles: {
                  background:'#CCCCCC',
                  borderRadius:'5px',
                  position: 'absolute',
                  top:'3px',
                  left: '113px',
                  height:'10px',
                  width:'10px'
                }
              },
              {
                styles: {
                  'line-height': '10px',
                  position: 'absolute',
                  top:'15px',
                  left: '96px',
                  height: '10px'
                },
                text:'B系主机'
              }
            ]

          },
          // slot4
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [{id:'13009',text: 'B1'},
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }]
          },
          // slot5
          {
            styles:{
              height:'54px',
              verticalAlign: 'middle',
              display:'table-cell',
              'width': '48px',
              position: 'relative',
              background: '#EEEEEE'
            },
            children: [{id:'13010',text: 'B2'},
              {
                styles:{
                  height: '8px',
                  width: '16px',
                  position: 'absolute',
                  top:'38px',
                  background: '#CCCCCC'
                }
              }]
          }
        ]
      },
// cage4
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '36px',
              'line-height': '36px',
              'width': '336px',
              letterSpacing:'1px'

            },
            children: [{id:'15001',text: ''}]
          }
        ]
      },
// cage5
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'14001',
            styles: {
              'height': '54px',
              'width': '24px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'14002',
            styles: {
              display:'table-cell',
              'height': '54px',
              'width': '24px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            id:'14003',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          },
          // slot4
          {
            id:'14004',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            id:'14005',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            id:'14006',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot7
          {
            id:'14007',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot8
          {
            id:'14008',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot9
          {
            id:'14009',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            id:'14010',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot11
          {
            id:'14011',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            id:'14012',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [
              {
                text: 'V I B'
              }
            ]
          },
          // slot13
          {
            id:'14013',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot14
          {
            id:'14014',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot15
          {
            id:'14015',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot16
          {
            id:'14016',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot17
          {
            id:'14017',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#E50000 '
            },
            children: [{text: 'C P S U'}]
          },
          // slot18
          {
            id:'14018',
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
        ]
      },
// cage6
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '18px',
              'line-height': '18px',
              'width': '336px'
            },
            children: [{text: '风扇'}]
          }
        ]
      },
// cage7
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'15001',
            styles: {
              'height': '54px',
              'width': '24px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'15002',
            styles: {
              display:'table-cell',
              'height': '54px',
              'width': '24px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#36AB60'
            },
            children: [{text: 'S W U'}]
          },
          // slot4
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot7
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot8
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot9
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V O B'}]
          },
          // slot11
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            styles: {

              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [
              {
                text: 'V I B'
              }
            ]
          },
          // slot13
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot14
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'P P U'}]
          },
          // slot15
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#36AB60'
            },
            children: [{text: 'V C'}]
          },
          // slot16
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
          // slot17
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '32px',
              background:'#E50000 '
            },
            children: [{text: 'C P S U'}]
          },
          // slot18
          {
            styles: {
              'height': '54px',
              display:'table-cell',
              'width': '16px',
              background:'#EEEEEE'
            },
            children: []
          },
        ]
      }
      ,

// cage8
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '18px',
              'line-height': '18px',
              'width': '336px'
            },
            children: [{text: '  '}]
          }
        ]
      }
      ,
// cage9
      {
        align:'horizonText',
        slots: [
          // slot1
          {
            styles: {
              'height': '108px',
              'line-height': '108px',
              'width': '336px'
            },
            children: [{text: '  '}]
          }
        ]
      },
// cage10
      {
        align:'horizonText',
        slots:[
          // slot1
          {
            styles: {
              'height': '54px',
              'line-height': '54px',
              'width': '336px'
            },
            children: [{text: ' '}]
          }
        ]
      }]
  },
  {
    sides: 'single',
    locationInfo:{
      stationName: '文海南站',
      stationId: '23',
      roomIndex: '303',
      row: '4行',
      column:'5列'
    },
    front:[{
      type: 'other',
      align:'horizonText',
      slots:[
        // slot1
        {
          id:'21001',
          styles: {
            'height': '36px',
            'width': '320px',
            'line-height':'36px'
          },
          children: [{text: 'YLJZ-F1型计轴系统'}]
        },
      ]
    },
// cage2
      {
        align:'horizonText',
        slots:[
          // slot1
          {
            id:'22001',
            styles: {
              'height': '18px',
              'width': '320px',
              'line-height':'18px'
            },
            children: [{text: '计轴主机1'}]
          },
        ],
      },

// cage3
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'24001',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'24002',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            id:'24003',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot4
          {
            id:'24004',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            id:'24005',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            id:'24006',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot7
          {
            id:'24007',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot8
          {
            id:'24008',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot9
          {
            id:'24009',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            id:'24010',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot11
          {
            id:'24011',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            id:'24012',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot13
          {
            id:'24013',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot14
          {
            id:'24014',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot15
          {
            id:'24015',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          },
          // slot16
          {
            id:'24016',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          }
        ]
      },
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'25001',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'25002',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            id:'25003',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot4
          {
            id:'25004',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            id:'25005',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            id:'25006',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot7
          {
            id:'25007',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot8
          {
            id:'25008',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot9
          {
            id:'25009',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            id:'25010',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot11
          {
            id:'25011',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            id:'25012',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot13
          {
            id:'25013',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot14
          {
            id:'25014',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot15
          {
            id:'25015',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          },
          // slot16
          {
            id:'25016',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          }
        ]
      },
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'26001',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'26002',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            id:'26003',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot4
          {
            id:'26004',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            id:'26005',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            id:'26006',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot7
          {
            id:'26007',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot8
          {
            id:'26008',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot9
          {
            id:'26009',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            id:'26010',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot11
          {
            id:'26011',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            id:'26012',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot13
          {
            id:'26013',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot14
          {
            id:'26014',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot15
          {
            id:'26015',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          },
          // slot16
          {
            id:'26016',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          }
        ]
      },
      {
        type:'board',
        slots: [
          // slot1
          {
            id:'27001',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot2
          {
            id:'27002',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot3
          {
            id:'27003',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot4
          {
            id:'27004',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot5
          {
            id:'27005',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot6
          {
            id:'27006',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot7
          {
            id:'27007',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot8
          {
            id:'27008',
            styles: {
              'height': '72px',
              'width': '20px',
              background:'#36AB60',
              display:'table-cell',
            },
            children: [{text: 'V C'}]
          },
          // slot9
          {
            id:'27009',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot10
          {
            id:'27010',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot11
          {
            id:'27011',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot12
          {
            id:'27012',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot13
          {
            id:'27013',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot14
          {
            id:'27014',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'V I B'}]
          },
          // slot15
          {
            id:'27015',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          },
          // slot16
          {
            id:'27016',
            styles: {
              'height': '72px',
              display:'table-cell',
              'width': '20px',
              background:'#36AB60'
            },
            children: [{text: 'C P S U'}]
          }
        ]
      },
      ]

  }

]
export default cabinetConfiguration




























// 配置文件的详解，三级结构 机柜--机笼--机缝
var configuration=
// 机柜
  [
    // 机笼列表
    {
      type: 'other',
      align:'horizonText',
      // 机缝列表
      slots:[
        {
          id:'1001',
          styles: {
          },
          // 机缝内的子图元，包括文本，图片，和dom。可能包括id，样式，文本，图片属性。
          children: [
            // 子属性1
            {text: 'TAU'}
          ]
        },
      ]
    },
    {

    },
    {
      type:'battery',
      slots:[
        // slot1
        {
          styles:{
            height:'54px',
            verticalAlign: 'middle',
            display:'table-cell',
            'width': '48px',
            position: 'relative',
            background: '#EEEEEE'
          },
          children: [
            {text: 'A1'},
            {
              styles:{
                height: '8px',
                width: '16px',
                position: 'absolute',
                top:'38px',
                background: '#CCCCCC'
              }
            }
          ]
        },
        // slot2
        {
          styles:{
            height:'54px',
            verticalAlign: 'middle',
            display:'table-cell',
            'width': '48px',
            position: 'relative',
            background: '#EEEEEE'
          },
          children: [{text: 'A2'},
            {
              styles:{
                height: '8px',
                width: '16px',
                position: 'absolute',
                top:'38px',
                background: '#CCCCCC'
              }
            }]
        },
        // slot3
        {
          styles:{
            height:'54px',
            verticalAlign: 'middle',
            display:'table-cell',
            'width': '144px',
            position: 'relative',
            background: '#EEEEEE',
          },
          children: [
            // 子属性1
            {
              styles: {
                position: 'absolute',
                top:'15px',
                left: '59px',
                height: '10px',
                'line-height': '10px'
              },
              text:'自动'
            },
            // 子属性2
            {
              styles: {
                position: 'absolute',
                top:'3px',
                left: '58px',
                height: '10px',
                'line-height': '10px'
              },
              text:'A'
            },
            // 子属性3
            {
              styles: {
                'line-height': '10px',
                position: 'absolute',
                top:'3px',
                left: '79px',
                height: '10px'
              },
              text:'B'
            },
            // 子属性4
            {
              styles:{
                position: 'absolute',
                top:'3px',
                left: '67px',
                height:'10px',
                width:'10px'
              },
              img:'batterySwitch.svg'
            },
            // 子属性5
            {
              id:'3001',
              styles: {}
            },
            // 子属性6
            {
              styles: {},
              text:'A系主机'
            },
            {
              id:'3002',
              styles: {}
            },
            {
              styles: {},
              text:'A系运行'
            },
            {
              id:'3003',
              styles: {}
            },
            {
              styles: {},
              text:'同步'
            },
            {
              id:'3004',
              styles: {}
            },
            {
              styles: {},
              text:'B系运行'
            },
            {
              id:'3005',
              styles: {}
            },
            {
              styles: {},
              text:'B系主机'
            }
          ]

        },
        // slot4
        {
          styles:{
            height:'54px',
            verticalAlign: 'middle',
            display:'table-cell',
            'width': '48px',
            position: 'relative',
            background: '#EEEEEE'
          },
          children: [{text: 'B1'},
            {
              styles:{
                height: '8px',
                width: '16px',
                position: 'absolute',
                top:'38px',
                background: '#CCCCCC'
              }
            }]
        },
        // slot5
        {
          styles:{
            height:'54px',
            verticalAlign: 'middle',
            display:'table-cell',
            'width': '48px',
            position: 'relative',
            background: '#EEEEEE'
          },
          children: [{text: 'B2'},
            {
              styles:{
                height: '8px',
                width: '16px',
                position: 'absolute',
                top:'38px',
                background: '#CCCCCC'
              }
            }]
        }
      ]
    },
    // cage4
    {
      align:'horizonText',
      slots: [
        // slot1
        {
          styles: {
            'height': '36px',
            'line-height': '36px',
            'width': '336px',
            letterSpacing:'1px'

          },
          children: [{text: '导风机框'}]
        }
      ]
    },
    // cage5
    {
      type:'board',
      slots: [
        // slot1
        {
          id:'4001',
          styles: {
            'height': '54px',
            'width': '24px',
            background:'#36AB60',
            display:'table-cell',
          },
          children: [{text: 'V C'}]
        },
        // slot2
        {
          id:'4002',
          styles: {
            display:'table-cell',
            'height': '54px',
            'width': '24px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot3
        {
          id:'4003',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '32px',
            background:'#36AB60'
          },
          children: [{text: 'C P S U'}]
        },
        // slot4
        {
          id:'4004',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot5
        {
          id:'4005',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot6
        {
          id:'4006',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'P P U'}]
        },
        // slot7
        {
          id:'4007',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V O B'}]
        },
        // slot8
        {
          id:'4008',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V O B'}]
        },
        // slot9
        {
          id:'4009',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V I B'}]
        },
        // slot10
        {
          id:'4010',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V O B'}]
        },
        // slot11
        {
          id:'4011',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V I B'}]
        },
        // slot12
        {
          id:'4012',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [
            {
              text: 'V I B'
            }
          ]
        },
        // slot13
        {
          id:'4013',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#EEEEEE'
          },
          children: []
        },
        // slot14
        {
          id:'4014',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'P P U'}]
        },
        // slot15
        {
          id:'4015',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot16
        {
          id:'4016',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#EEEEEE'
          },
          children: []
        },
        // slot17
        {
          id:'4017',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '32px',
            background:'#E50000 '
          },
          children: [{text: 'C P S U'}]
        },
        // slot18
        {
          id:'4018',
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#EEEEEE'
          },
          children: []
        },
      ]
    },
    // cage6
    {
      align:'horizonText',
      slots: [
        // slot1
        {
          styles: {
            'height': '18px',
            'line-height': '18px',
            'width': '336px'
          },
          children: [{text: '风扇'}]
        }
      ]
    },
    // cage7
    {
      type:'board',
      slots: [
        // slot1
        {
          styles: {
            'height': '54px',
            'width': '24px',
            background:'#36AB60',
            display:'table-cell',
          },
          children: [{text: 'V C'}]
        },
        // slot2
        {
          styles: {
            display:'table-cell',
            'height': '54px',
            'width': '24px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot3
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '32px',
            background:'#36AB60'
          },
          children: [{text: 'S W U'}]
        },
        // slot4
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot5
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot6
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'P P U'}]
        },
        // slot7
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V O B'}]
        },
        // slot8
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V O B'}]
        },
        // slot9
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V I B'}]
        },
        // slot10
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V O B'}]
        },
        // slot11
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V I B'}]
        },
        // slot12
        {
          styles: {

            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [
            {
              text: 'V I B'
            }
          ]
        },
        // slot13
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#EEEEEE'
          },
          children: []
        },
        // slot14
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'P P U'}]
        },
        // slot15
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#36AB60'
          },
          children: [{text: 'V C'}]
        },
        // slot16
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#EEEEEE'
          },
          children: []
        },
        // slot17
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '32px',
            background:'#E50000 '
          },
          children: [{text: 'C P S U'}]
        },
        // slot18
        {
          styles: {
            'height': '54px',
            display:'table-cell',
            'width': '16px',
            background:'#EEEEEE'
          },
          children: []
        },
      ]
    }
    ,

    // cage8
    {
      align:'horizonText',
      slots: [
        // slot1
        {
          styles: {
            'height': '18px',
            'line-height': '18px',
            'width': '336px'
          },
          children: [{text: '理线框'}]
        }
      ]
    }
    ,
    // cage9
    {
      align:'horizonText',
      slots: [
        // slot1
        {
          styles: {
            'height': '108px',
            'line-height': '108px',
            'width': '336px'
          },
          children: [{text: 'VIU机笼'}]
        }
      ]
    },
    // cage10
    {
      align:'horizonText',
      slots:[
        // slot1
        {
          styles: {
            'height': '54px',
            'line-height': '54px',
            'width': '336px'
          },
          children: [{text: 'BTM'}]
        }
      ]
    },
  ]
