// WEBSOCKETS WOOOOO
let ws = new WebSocket('wss://test-server-app.herokuapp.com:443');


// REBOOT PC FUNCTIONS
let reboot_1 = document.getElementById('reboot_pc_1')
reboot_1.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"reboot_pc_1":"1"}))
})
let reboot_2 = document.getElementById('reboot_pc_2')
reboot_2.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"reboot_pc_2":"1"}))
})
let reboot_3 = document.getElementById('reboot_pc_3');
reboot_3.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"reboot_pc_3": "1"}));
});
let reboot_4 = document.getElementById('reboot_pc_4');
reboot_4.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"reboot_pc_4": "1"}));
});
let reboot_5 = document.getElementById('reboot_pc_5');
reboot_5.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"reboot_pc_5": "1"}));
});

// SHUTDOWN PC FUNCTIONS
shutdown_1 = document.getElementById('shutdown_pc_1')
shutdown_1.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"shutdown_pc_1":"1"}))
})
shutdown_2 = document.getElementById('shutdown_pc_2')
shutdown_2.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"shutdown_pc_2":"1"}))
})

// POWER CYCLE FUNCTIONS
powercycle_1 = document.getElementById('powercycle_pc_1')
powercycle_1.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"powercycle_pc_1":"1"}))
})
powercycle_2 = document.getElementById('powercycle_pc_2')
powercycle_2.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"powercycle_pc_2":"1"}))
})

// CAMERAS FUNCTIONS
let camera_1 = document.getElementById('restart_cam_1')
camera_1.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"camera_1_reset":"1"}))
})
let camera_2 = document.getElementById('restart_cam_2')
camera_2.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"camera_2_reset":"1"}))
})
let camera_3 = document.getElementById('restart_cam_3')
camera_3.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"camera_3_reset":"1"}))
})

// START-STOP GAME FUNCTIONS
let start_goal = document.getElementById('start_game_goal')
start_goal.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"start_game_goal":"1"}))
})
let start_drive = document.getElementById('start_game_drive')
start_drive.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"start_game_drive":"1"}))
})
let start_run = document.getElementById('start_game_run')
start_run.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"start_game_run":"1"}))
})
let unload_game = document.getElementById('unload_game')
unload_game.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"unload_game":"1"}))
})

// CALIBRATE GAME FUNCTIONS
let cal_floor = document.getElementById('cal_floor')
cal_floor.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"cal_floor":"1"}))
})
let cal_goal = document.getElementById('cal_game_goal')
cal_goal.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"cal_game_goal":"1"}))
})
let cal_run = document.getElementById('cal_game_run')
cal_run.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"cal_game_run":"1"}))
})

// SWITCH PC VIDEO FEED
let switch_feed = document.getElementById('switch_feed')
switch_feed.addEventListener('click', (event) => {
    ws.send(JSON.stringify({"switch_feed":"1"}))
})

ws.addEventListener('open', (event) => {
    console.log('Socket connection open');
    ws.send('pong');
  });
  
  ws.addEventListener('message', (message) => {
    if (message && message.data) {
      if (message.data === "ping") {
        console.log("got ping");
        ws.send("pong");
        return;
      }
      let data = JSON.parse(message.data);
        // WRITE CAMERA STATUS ON RESET
        if (data.hasOwnProperty('rear_kinect_active')) {
            const camera_1_satus = document.getElementById('camera_1_satus');
            if (data.rear_kinect_active === null || data.rear_kinect_active === undefined){
                camera_1_satus.value = 0;
            } else {
                camera_1_satus.value = data.rear_kinect_active;
            }
        }
        if (data.hasOwnProperty('front_kinect_active')) {
            const camera_2_satus = document.getElementById('camera_2_satus');
            if (data.front_kinect_active === null || data.front_kinect_active === undefined){
                camera_2_satus.value = 0;
            } else {
                camera_2_satus.value = data.front_kinect_active;
            }
        }
        if (data.hasOwnProperty('side_kinect_active')) {
            const camera_3_satus = document.getElementById('camera_3_satus');
            if (data.side_kinect_active === null || data.side_kinect_active === undefined){
                camera_3_satus.value = 0;
            } else {
                camera_3_satus.value = data.side_kinect_active;
            }
        }

        // WRITE CAMERA STATUS ON PING
        if (data.hasOwnProperty('rear_kinect_on')) {
            const camera_1_satus = document.getElementById('camera_1_satus');
            if (data.rear_kinect_on === null || data.rear_kinect_on === undefined){
                camera_1_satus.value = 0;
            } else {
                camera_1_satus.value = data.rear_kinect_on;
            }
        }
        if (data.hasOwnProperty('front_kinect_on')) {
            const camera_2_satus = document.getElementById('camera_2_satus');
            if (data.front_kinect_on === null || data.front_kinect_on === undefined){
                camera_2_satus.value = 0;
            } else {
                camera_2_satus.value = data.front_kinect_on;
            }
        }
        if (data.hasOwnProperty('side_kinect_on')) {
            const camera_3_satus = document.getElementById('camera_3_satus');
            if (data.side_kinect_on === null || data.side_kinect_on === undefined){
                camera_3_satus.value = 0;
            } else {
                camera_3_satus.value = data.side_kinect_on;
            }
        }
        

        // WRITE PC STATUS
        if (data.hasOwnProperty('PC1_is_on')) {
            const pc_1_status = document.getElementById('pc_1_status');
            if (data.PC1_is_on === null || data.PC1_is_on === undefined) {
                pc_1_status.value = 0
            } else {
                pc_1_status.value = data.PC1_is_on;
            }
        }
        if (data.hasOwnProperty('PC2_is_on')) {
            const pc_2_status = document.getElementById('pc_2_status');
            if (data.PC2_is_on === null || data.PC2_is_on === undefined) {
                pc_2_status.value = 0
            } else {
                pc_2_status.value = data.PC2_is_on;
            }
        }
        if (data.hasOwnProperty('PC3_is_on')) {
            const pc_3_status = document.getElementById('pc_3_status');
            if (data.PC3_is_on === null || data.PC3_is_on === undefined) {
                pc_3_status.value = 0
            } else {
                pc_3_status.value = data.PC3_is_on;
            }
        }
        if (data.hasOwnProperty('PC4_is_on')) {
            const pc_4_status = document.getElementById('pc_4_status');
            if (data.PC4_is_on === null || data.PC4_is_on === undefined) {
                pc_4_status.value = 0
            } else {
                pc_4_status.value = data.PC4_is_on;
            }
        }
        if (data.hasOwnProperty('PC5_is_on')) {
            const pc_5_status = document.getElementById('pc_5_status');
            if (data.PC5_is_on === null || data.PC5_is_on === undefined) {
                pc_5_status.value = 0
            } else {
                pc_5_status.value = data.PC5_is_on;
            }
        }

        // WRITE CURRENT ACTIVE GAME
        if (data.hasOwnProperty('goal_active')) {
            const goal_loaded = document.getElementById('goal_loaded');
            if (data.goal_active === null || data.goal_active === undefined) {
                goal_loaded.value = 0
            } else {
                goal_loaded.value = "Loaded";
                drive_loaded.value = "0";
                run_loaded.value = "0";
                active_game.value = "GOAL"
            }
        }

        if (data.hasOwnProperty('drive_active')) {
            const drive_loaded = document.getElementById('drive_loaded');
            if (data.drive_active === null || data.drive_active === undefined) {
                drive_loaded.value = 0
            } else {
                goal_loaded.value = "0";
                drive_loaded.value = "Loaded";
                run_loaded.value = "0";
                active_game.value = "DRIVE"
            }
        }

        if (data.hasOwnProperty('run_active')) {
            const run_loaded = document.getElementById('run_loaded');
            if (data.run_active === null || data.run_active === undefined) {
                run_loaded.value = 0
            } else {
                goal_loaded.value = "0";
                drive_loaded.value = "0";
                run_loaded.value = "Loaded";
                active_game.value = "RUN"
            }
        }

        if (data.hasOwnProperty('games_unloaded')) {
            const unload_game = document.getElementById('unload_game');
            if (data.games_unloaded === null || data.games_unloaded === undefined) {
                unload_game.value = 0
            } else {
                goal_loaded.value = "0";
                drive_loaded.value = "0";
                run_loaded.value = "0";
                active_game.value = "None"
            }
        }
    }

  });
  
  ws.addEventListener('error', (error) => {
      console.error('Error in the connection', error);
      alert('error connecting socket server', error);
  });
  
  ws.addEventListener('close', (event) => {
      console.log('Socket connection closed');
      alert('closing socket server');
  });
  