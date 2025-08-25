var APP_DATA = {
  "scenes": [
    {
      "id": "0-director-room",
      "name": "DIRECTOR ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.235348996779928,
          "pitch": 0.10015398975258094,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-corridor",
      "name": "CORRIDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.27548295624818486,
          "pitch": -0.021722265791286333,
          "rotation": 0,
          "target": "0-director-room"
        },
        {
          "yaw": -1.6810037925896566,
          "pitch": 0.26388272492594034,
          "rotation": 0,
          "target": "2-meeting-room"
        },
        {
          "yaw": -0.4972158072798578,
          "pitch": 0.0609177088733297,
          "rotation": 0,
          "target": "3-corrridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-meeting-room",
      "name": "MEETING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2913628495346696,
          "pitch": 0.06216923140238606,
          "rotation": 0,
          "target": "1-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corrridor-1",
      "name": "CORRRIDOR 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5573683226128487,
          "pitch": 0.09762779635329011,
          "rotation": 0,
          "target": "0-director-room"
        },
        {
          "yaw": 0.02033483623299759,
          "pitch": -0.016095452035765234,
          "rotation": 0,
          "target": "2-meeting-room"
        },
        {
          "yaw": 1.4323744400460479,
          "pitch": 0.10266831646085528,
          "rotation": 0,
          "target": "4-customer-care"
        },
        {
          "yaw": 2.9995221945876427,
          "pitch": -0.02541074618687844,
          "rotation": 0,
          "target": "8-reception-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-customer-care",
      "name": "CUSTOMER CARE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "5-ro-and-recovery",
      "name": "RO AND RECOVERY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.979505930073863,
          "pitch": 0.46165604134297133,
          "rotation": 0,
          "target": "9-reception-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-investment",
      "name": "INVESTMENT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0410152674144513,
          "pitch": 0.4740124203625573,
          "rotation": 0,
          "target": "9-reception-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-operational-manager",
      "name": "OPERATIONAL MANAGER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0102330157520285,
          "pitch": 0.0573289133713768,
          "rotation": 0,
          "target": "8-reception-view2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-reception-view2",
      "name": "RECEPTION VIEW2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010250000519821612,
          "pitch": 0.11579067969656265,
          "rotation": 0,
          "target": "5-ro-and-recovery"
        },
        {
          "yaw": -0.5150022077020999,
          "pitch": 0.0793676710022524,
          "rotation": 0,
          "target": "6-investment"
        },
        {
          "yaw": -1.9471027456842958,
          "pitch": 0.36404095092138,
          "rotation": 0,
          "target": "4-customer-care"
        },
        {
          "yaw": -2.8638411108363897,
          "pitch": 0.3910666457425247,
          "rotation": 0,
          "target": "3-corrridor-1"
        },
        {
          "yaw": -0.49020390358621846,
          "pitch": 0.2647554022145435,
          "rotation": 0,
          "target": "9-reception-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-reception-1",
      "name": "RECEPTION 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3298889456329572,
          "pitch": 0.08291602164050005,
          "rotation": 0,
          "target": "4-customer-care"
        },
        {
          "yaw": 0.28769945645173145,
          "pitch": 0.05753264029287841,
          "rotation": 0,
          "target": "5-ro-and-recovery"
        },
        {
          "yaw": 2.1024219678551024,
          "pitch": -0.042402520801333665,
          "rotation": 0,
          "target": "1-corridor"
        },
        {
          "yaw": 1.842677364618158,
          "pitch": 0.03888125408165344,
          "rotation": 0,
          "target": "8-reception-view2"
        },
        {
          "yaw": 1.6565817087934693,
          "pitch": 0.021983916648892432,
          "rotation": 0,
          "target": "7-operational-manager"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-16",
      "name": "16",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-17",
      "name": "17",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "DBI",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
