var klineData1 = [
    {"time":"2016/8/2 09:30","series":"深圳成指","open":19.79,"high":19.79,"low":17.85,"close":18.85},
    {"time":"2016/8/2 09:31","series":"深圳成指","open":18.8,"high":18.89,"low":17.86,"close":17.95},
    {"time":"2016/8/2 09:32","series":"深圳成指","open":17.97,"high":18.05,"low":17.25,"close":17.7},
    {"time":"2016/8/2 09:33","series":"深圳成指","open":17.5,"high":18.3,"low":17.41,"close":18.2},
    {"time":"2016/8/2 09:34","series":"深圳成指","open":18.28,"high":19.3,"low":18.21,"close":19.2},
    {"time":"2016/8/2 09:35","series":"深圳成指","open":19.22,"high":19.39,"low":18.76,"close":19.09},
    {"time":"2016/8/2 09:36","series":"深圳成指","open":18.92,"high":19.48,"low":18.86,"close":19.2},
    {"time":"2016/8/2 09:37","series":"深圳成指","open":19.2,"high":19.36,"low":18.48,"close":18.75},
    {"time":"2016/8/2 09:38","series":"深圳成指","open":18.5,"high":18.84,"low":18.4,"close":18.4},
    {"time":"2016/8/2 09:39","series":"深圳成指","open":18.4,"high":19.44,"low":18.35,"close":19.36},
    {"time":"2016/8/2 09:40","series":"深圳成指","open":19.4,"high":19.45,"low":18.86,"close":18.93},
    {"time":"2016/8/2 09:41","series":"深圳成指","open":19.08,"high":19.46,"low":18.83,"close":19.3},
    {"time":"2016/8/2 09:42","series":"深圳成指","open":19.32,"high":19.85,"low":19.14,"close":19.7},
    {"time":"2016/8/2 09:43","series":"深圳成指","open":19.79,"high":19.79,"low":19.1,"close":19.3},
    {"time":"2016/8/2 09:44","series":"深圳成指","open":19.4,"high":19.4,"low":19.09,"close":19.27},
    {"time":"2016/8/2 09:45","series":"深圳成指","open":19.27,"high":19.46,"low":19.01,"close":19.03},
    {"time":"2016/8/2 09:46","series":"深圳成指","open":19.18,"high":19.44,"low":19.03,"close":19.35},
    {"time":"2016/8/2 09:47","series":"深圳成指","open":19.35,"high":20.08,"low":19.22,"close":19.88},
    {"time":"2016/8/2 09:48","series":"深圳成指","open":20,"high":20.7,"low":19.89,"close":20.59},
    {"time":"2016/8/2 09:49","series":"深圳成指","open":20.42,"high":20.49,"low":19.92,"close":20},
    {"time":"2016/8/2 09:50","series":"深圳成指","open":19.9,"high":20.62,"low":19.89,"close":20.43},
    {"time":"2016/8/2 09:51","series":"深圳成指","open":20.44,"high":21.07,"low":20.28,"close":20.88},
    {"time":"2016/8/2 09:52","series":"深圳成指","open":21,"high":22,"low":21,"close":21.75},
    {"time":"2016/8/2 09:53","series":"深圳成指","open":21.4,"high":22.14,"low":21.21,"close":21.72},
    {"time":"2016/8/2 09:54","series":"深圳成指","open":21.73,"high":22.07,"low":21.55,"close":21.69},
    {"time":"2016/8/2 09:55","series":"深圳成指","open":21.99,"high":22,"low":21.2,"close":21.75},
    {"time":"2016/8/2 09:56","series":"深圳成指","open":21.6,"high":22.06,"low":21.5,"close":21.58},
    {"time":"2016/8/2 09:57","series":"深圳成指","open":21.86,"high":21.89,"low":21.28,"close":21.3},
    {"time":"2016/8/2 09:58","series":"深圳成指","open":21.6,"high":21.63,"low":20.74,"close":20.84},
    {"time":"2016/8/2 09:59","series":"深圳成指","open":20.72,"high":21.13,"low":20.68,"close":21.1},
    {"time":"2016/8/2 10:00","series":"深圳成指","open":21.25,"high":21.94,"low":21.2,"close":21.81},
    {"time":"2016/8/2 10:01","series":"深圳成指","open":21.79,"high":22.68,"low":21.63,"close":22.52},
    {"time":"2016/8/2 10:02","series":"深圳成指","open":22.5,"high":22.86,"low":22.15,"close":22.61},
    {"time":"2016/8/2 10:03","series":"深圳成指","open":22.68,"high":23.15,"low":22.36,"close":22.5},
    {"time":"2016/8/2 10:04","series":"深圳成指","open":22.44,"high":22.8,"low":22.08,"close":22.23},
    {"time":"2016/8/2 10:05","series":"深圳成指","open":22.12,"high":22.4,"low":21.81,"close":21.98},
    {"time":"2016/8/2 10:06","series":"深圳成指","open":21.97,"high":22.12,"low":21.68,"close":21.8},
    {"time":"2016/8/2 10:07","series":"深圳成指","open":21.89,"high":22.21,"low":21.89,"close":22.15},
    {"time":"2016/8/2 10:08","series":"深圳成指","open":22.2,"high":22.39,"low":21.95,"close":21.98},
    {"time":"2016/8/2 10:09","series":"深圳成指","open":21.95,"high":21.98,"low":21.25,"close":21.57},
    {"time":"2016/8/2 10:10","series":"深圳成指","open":21.38,"high":21.74,"low":21.33,"close":21.41},
    {"time":"2016/8/2 10:11","series":"深圳成指","open":21.43,"high":21.82,"low":21.37,"close":21.8},
    {"time":"2016/8/2 10:12","series":"深圳成指","open":21.96,"high":22.05,"low":21.71,"close":22.03},
    {"time":"2016/8/2 10:13","series":"深圳成指","open":22.05,"high":22.41,"low":22,"close":22.28},
    {"time":"2016/8/2 10:14","series":"深圳成指","open":22.27,"high":22.27,"low":21.78,"close":22.19},
    {"time":"2016/8/2 10:15","series":"深圳成指","open":22.24,"high":22.78,"low":21.36,"close":21.5},
    {"time":"2016/8/2 10:16","series":"深圳成指","open":21.42,"high":21.7,"low":21.01,"close":21.6},
    {"time":"2016/8/2 10:17","series":"深圳成指","open":21.58,"high":22,"low":21.45,"close":22},
    {"time":"2016/8/2 10:18","series":"深圳成指","open":22,"high":22.2,"low":21.7,"close":21.92},
    {"time":"2016/8/2 10:19","series":"深圳成指","open":21.88,"high":21.88,"low":21.01,"close":21.2},
    {"time":"2016/8/2 10:20","series":"深圳成指","open":21.4,"high":21.44,"low":20.78,"close":20.85},
    {"time":"2016/8/2 10:21","series":"深圳成指","open":20.87,"high":21.15,"low":20.75,"close":20.78},
    {"time":"2016/8/2 10:22","series":"深圳成指","open":20.85,"high":21,"low":20.65,"close":20.88},
    {"time":"2016/8/2 10:23","series":"深圳成指","open":20.94,"high":21,"low":20.7,"close":20.85},
    {"time":"2016/8/2 10:24","series":"深圳成指","open":20.95,"high":21.17,"low":20.82,"close":21.1},
    {"time":"2016/8/2 10:25","series":"深圳成指","open":21.1,"high":21.1,"low":20.26,"close":20.5},
    {"time":"2016/8/2 10:26","series":"深圳成指","open":20.35,"high":20.42,"low":19.5,"close":19.9},
    {"time":"2016/8/2 10:27","series":"深圳成指","open":19.9,"high":20,"low":19.46,"close":19.8},
    {"time":"2016/8/2 10:28","series":"深圳成指","open":19.89,"high":20.51,"low":19.5,"close":20.49},
    {"time":"2016/8/2 10:29","series":"深圳成指","open":20.3,"high":20.3,"low":20,"close":20.21},
    {"time":"2016/8/2 10:30","series":"深圳成指","open":20.1,"high":20.19,"low":19.8,"close":19.82},
    {"time":"2016/8/2 10:31","series":"深圳成指","open":19.7,"high":19.93,"low":19.32,"close":19.77},
    {"time":"2016/8/2 10:32","series":"深圳成指","open":19.5,"high":19.89,"low":19.41,"close":19.58},
    {"time":"2016/8/2 10:33","series":"深圳成指","open":19.7,"high":20.22,"low":19.56,"close":20.17},
    {"time":"2016/8/2 10:34","series":"深圳成指","open":20.17,"high":20.29,"low":19.94,"close":20.14},
    {"time":"2016/8/2 10:35","series":"深圳成指","open":19.97,"high":20.25,"low":19.96,"close":20.12},
    {"time":"2016/8/2 10:36","series":"深圳成指","open":20.21,"high":20.47,"low":19.85,"close":20.41},
    {"time":"2016/8/2 10:37","series":"深圳成指","open":20.24,"high":20.5,"low":20.23,"close":20.38},
    {"time":"2016/8/2 10:38","series":"深圳成指","open":20.4,"high":20.54,"low":20.26,"close":20.49},
    {"time":"2016/8/2 10:39","series":"深圳成指","open":20.49,"high":20.49,"low":20.49,"close":20.49},
    {"time":"2016/8/2 10:40","series":"深圳成指","open":19.99,"high":19.99,"low":19.22,"close":19.85},
    {"time":"2016/8/2 10:41","series":"深圳成指","open":19.76,"high":19.98,"low":19.43,"close":19.88},
    {"time":"2016/8/2 10:42","series":"深圳成指","open":19.98,"high":20.6,"low":19.8,"close":20.18},
    {"time":"2016/8/2 10:43","series":"深圳成指","open":20.17,"high":20.24,"low":19.86,"close":19.9},
    {"time":"2016/8/2 10:44","series":"深圳成指","open":20.2,"high":20.35,"low":19.85,"close":20.27},
    {"time":"2016/8/2 10:45","series":"深圳成指","open":20.35,"high":20.8,"low":20.32,"close":20.78},
    {"time":"2016/8/2 10:46","series":"深圳成指","open":20.7,"high":21.12,"low":20.48,"close":21.1},
    {"time":"2016/8/2 10:47","series":"深圳成指","open":20.92,"high":21.75,"low":20.85,"close":21.65},
    {"time":"2016/8/2 10:48","series":"深圳成指","open":21.57,"high":21.85,"low":21.45,"close":21.68},
    {"time":"2016/8/2 10:49","series":"深圳成指","open":21.53,"high":21.53,"low":21.15,"close":21.15},
    {"time":"2016/8/2 10:50","series":"深圳成指","open":21.15,"high":21.5,"low":21.12,"close":21.2},
    {"time":"2016/8/2 10:51","series":"深圳成指","open":21.1,"high":21.24,"low":20.91,"close":20.93},
    {"time":"2016/8/2 10:52","series":"深圳成指","open":21,"high":21.46,"low":20.92,"close":21.24},
    {"time":"2016/8/2 10:53","series":"深圳成指","open":21.08,"high":21.08,"low":20.81,"close":20.94},
    {"time":"2016/8/2 10:54","series":"深圳成指","open":20.92,"high":21,"low":20.71,"close":20.76},
    {"time":"2016/8/2 10:55","series":"深圳成指","open":20.76,"high":20.97,"low":20.7,"close":20.93},
    {"time":"2016/8/2 10:56","series":"深圳成指","open":20.75,"high":20.88,"low":20.44,"close":20.47},
    {"time":"2016/8/2 10:57","series":"深圳成指","open":20.41,"high":20.71,"low":20.33,"close":20.66},
    {"time":"2016/8/2 10:58","series":"深圳成指","open":20.73,"high":21.03,"low":20.71,"close":21},
    {"time":"2016/8/2 10:59","series":"深圳成指","open":21.08,"high":21.29,"low":20.93,"close":21.19},
    {"time":"2016/8/2 11:00","series":"深圳成指","open":21.11,"high":21.35,"low":20.95,"close":21.1},
    {"time":"2016/8/2 11:01","series":"深圳成指","open":20.95,"high":21.18,"low":20.76,"close":20.76},
    {"time":"2016/8/2 11:02","series":"深圳成指","open":20.55,"high":20.68,"low":20.08,"close":20.63},
    {"time":"2016/8/2 11:03","series":"深圳成指","open":20.65,"high":21.08,"low":20.48,"close":21.06},
    {"time":"2016/8/2 11:04","series":"深圳成指","open":21.28,"high":21.76,"low":21.28,"close":21.56},
    {"time":"2016/8/2 11:05","series":"深圳成指","open":21.71,"high":22.61,"low":21.56,"close":22.22},
    {"time":"2016/8/2 11:06","series":"深圳成指","open":22.22,"high":22.26,"low":21.8,"close":21.93},
    {"time":"2016/8/2 11:07","series":"深圳成指","open":21.69,"high":22.1,"low":21.47,"close":21.65},
    {"time":"2016/8/2 11:08","series":"深圳成指","open":21.65,"high":22.51,"low":21.5,"close":22.35},
    {"time":"2016/8/2 11:09","series":"深圳成指","open":22.3,"high":22.3,"low":21.91,"close":22.21},
    {"time":"2016/8/2 11:10","series":"深圳成指","open":21.7,"high":21.8,"low":21.14,"close":21.22},
    {"time":"2016/8/2 11:11","series":"深圳成指","open":21.3,"high":21.7,"low":21.11,"close":21.14},
    {"time":"2016/8/2 11:12","series":"深圳成指","open":21.19,"high":21.69,"low":21.1,"close":21.38},
    {"time":"2016/8/2 11:13","series":"深圳成指","open":21.23,"high":21.62,"low":21.23,"close":21.37},
    {"time":"2016/8/2 11:14","series":"深圳成指","open":21.5,"high":22.16,"low":21.33,"close":21.9},
    {"time":"2016/8/2 11:15","series":"深圳成指","open":21.87,"high":22.14,"low":21.53,"close":21.58},
    {"time":"2016/8/2 11:16","series":"深圳成指","open":21.59,"high":22.2,"low":21.59,"close":22},
    {"time":"2016/8/2 11:17","series":"深圳成指","open":22.05,"high":22.41,"low":21.85,"close":21.96},
    {"time":"2016/8/2 11:18","series":"深圳成指","open":21.97,"high":22.1,"low":21.58,"close":21.59},
    {"time":"2016/8/2 11:19","series":"深圳成指","open":21.55,"high":21.81,"low":21.4,"close":21.6},
    {"time":"2016/8/2 11:20","series":"深圳成指","open":21.58,"high":21.58,"low":20.8,"close":21.18},
    {"time":"2016/8/2 11:21","series":"深圳成指","open":21.02,"high":21.34,"low":20.8,"close":20.99},
    {"time":"2016/8/2 11:22","series":"深圳成指","open":20.84,"high":21,"low":20.48,"close":20.75},
    {"time":"2016/8/2 11:23","series":"深圳成指","open":20.75,"high":21.12,"low":20.67,"close":20.69},
    {"time":"2016/8/2 11:24","series":"深圳成指","open":20.8,"high":21.08,"low":20.75,"close":20.79},
    {"time":"2016/8/2 11:25","series":"深圳成指","open":20.73,"high":21.16,"low":20.63,"close":21.13},
    {"time":"2016/8/2 11:26","series":"深圳成指","open":21.16,"high":21.42,"low":21.02,"close":21.27},
    {"time":"2016/8/2 11:27","series":"深圳成指","open":21.27,"high":21.77,"low":20.8,"close":20.98},
    {"time":"2016/8/2 11:28","series":"深圳成指","open":20.99,"high":21.05,"low":19.52,"close":19.99},
    {"time":"2016/8/2 11:29","series":"深圳成指","open":19.92,"high":19.92,"low":19.3,"close":19.6},
    {"time":"2016/8/2 11:30","series":"深圳成指","open":19.66,"high":20.1,"low":19.47,"close":19.96},
    {"time":"2016/8/2 13:00","series":"深圳成指","open":19.88,"high":20.14,"low":19.41,"close":19.63},
    {"time":"2016/8/2 13:01","series":"深圳成指","open":19.61,"high":19.72,"low":18.87,"close":18.95},
    {"time":"2016/8/2 13:02","series":"深圳成指","open":19.05,"high":19.22,"low":18.92,"close":19.21},
    {"time":"2016/8/2 13:03","series":"深圳成指","open":19.18,"high":19.63,"low":18.96,"close":19.37},
    {"time":"2016/8/2 13:04","series":"深圳成指","open":19.5,"high":19.74,"low":19.3,"close":19.38},
    {"time":"2016/8/2 13:05","series":"深圳成指","open":19.5,"high":19.5,"low":18.66,"close":18.88},
    {"time":"2016/8/2 13:06","series":"深圳成指","open":18.88,"high":19.14,"low":18.75,"close":19},
    {"time":"2016/8/2 13:07","series":"深圳成指","open":19,"high":19.12,"low":18.8,"close":19.1},
    {"time":"2016/8/2 13:08","series":"深圳成指","open":19.42,"high":19.84,"low":19.29,"close":19.58},
    {"time":"2016/8/2 13:09","series":"深圳成指","open":19.59,"high":19.64,"low":19.33,"close":19.56},
    {"time":"2016/8/2 13:10","series":"深圳成指","open":19.41,"high":19.65,"low":19.25,"close":19.44},
    {"time":"2016/8/2 13:11","series":"深圳成指","open":19.28,"high":19.68,"low":19.28,"close":19.48},
    {"time":"2016/8/2 13:12","series":"深圳成指","open":19.57,"high":19.61,"low":19.41,"close":19.47},
    {"time":"2016/8/2 13:13","series":"深圳成指","open":19.45,"high":19.78,"low":19.44,"close":19.5},
    {"time":"2016/8/2 13:14","series":"深圳成指","open":19.51,"high":19.82,"low":19.51,"close":19.56},
    {"time":"2016/8/2 13:15","series":"深圳成指","open":19.62,"high":19.76,"low":19.1,"close":19.15},
    {"time":"2016/8/2 13:16","series":"深圳成指","open":19.19,"high":19.43,"low":18.81,"close":18.86},
    {"time":"2016/8/2 13:17","series":"深圳成指","open":18.85,"high":19.29,"low":18.85,"close":19.29},
    {"time":"2016/8/2 13:18","series":"深圳成指","open":19.25,"high":19.25,"low":18.88,"close":18.94},
    {"time":"2016/8/2 13:19","series":"深圳成指","open":19.04,"high":19.15,"low":18.95,"close":19.05},
    {"time":"2016/8/2 13:20","series":"深圳成指","open":19.09,"high":19.34,"low":18.9,"close":19.21},
    {"time":"2016/8/2 13:21","series":"深圳成指","open":19.38,"high":19.55,"low":19.24,"close":19.46},
    {"time":"2016/8/2 13:22","series":"深圳成指","open":19.99,"high":20.41,"low":19.65,"close":19.75},
    {"time":"2016/8/2 13:23","series":"深圳成指","open":19.74,"high":19.91,"low":19.54,"close":19.9},
    {"time":"2016/8/2 13:24","series":"深圳成指","open":19.8,"high":19.88,"low":19.64,"close":19.8},
    {"time":"2016/8/2 13:25","series":"深圳成指","open":19.7,"high":19.85,"low":19.57,"close":19.6},
    {"time":"2016/8/2 13:26","series":"深圳成指","open":19.6,"high":19.84,"low":19.55,"close":19.71},
    {"time":"2016/8/2 13:27","series":"深圳成指","open":19.8,"high":19.83,"low":19.58,"close":19.65},
    {"time":"2016/8/2 13:28","series":"深圳成指","open":19.61,"high":20.25,"low":19.61,"close":20.18},
    {"time":"2016/8/2 13:29","series":"深圳成指","open":20.18,"high":20.2,"low":19.9,"close":20},
    {"time":"2016/8/2 13:30","series":"深圳成指","open":19.96,"high":19.96,"low":19.39,"close":19.61},
    {"time":"2016/8/2 13:31","series":"深圳成指","open":19.61,"high":19.85,"low":19.61,"close":19.71},
    {"time":"2016/8/2 13:32","series":"深圳成指","open":19.75,"high":20.62,"low":19.61,"close":20.18},
    {"time":"2016/8/2 13:33","series":"深圳成指","open":20.05,"high":20.28,"low":19.77,"close":20.08},
    {"time":"2016/8/2 13:34","series":"深圳成指","open":19.91,"high":20.12,"low":19.75,"close":20.08},
    {"time":"2016/8/2 13:35","series":"深圳成指","open":19.92,"high":20.06,"low":19.68,"close":19.86},
    {"time":"2016/8/2 13:36","series":"深圳成指","open":19.7,"high":20.08,"low":19.51,"close":19.82},
    {"time":"2016/8/2 13:37","series":"深圳成指","open":19.72,"high":19.72,"low":19,"close":19.5},
    {"time":"2016/8/2 13:38","series":"深圳成指","open":19.59,"high":19.64,"low":19.02,"close":19.16},
    {"time":"2016/8/2 13:39","series":"深圳成指","open":19.02,"high":19.4,"low":19.02,"close":19.17},
    {"time":"2016/8/2 13:40","series":"深圳成指","open":19.02,"high":19.4,"low":19.02,"close":19.31},
    {"time":"2016/8/2 13:41","series":"深圳成指","open":19.43,"high":19.47,"low":18.98,"close":18.98},
    {"time":"2016/8/2 13:42","series":"深圳成指","open":18.85,"high":18.95,"low":18.02,"close":18.26},
    {"time":"2016/8/2 13:43","series":"深圳成指","open":18.25,"high":18.44,"low":18.2,"close":18.39},
    {"time":"2016/8/2 13:44","series":"深圳成指","open":18.51,"high":19.39,"low":18.44,"close":19.19},
    {"time":"2016/8/2 13:45","series":"深圳成指","open":19.37,"high":19.37,"low":19.02,"close":19.2},
    {"time":"2016/8/2 13:46","series":"深圳成指","open":19.17,"high":19.17,"low":18.93,"close":18.99},
    {"time":"2016/8/2 13:47","series":"深圳成指","open":19.01,"high":19.28,"low":18.77,"close":18.98},
    {"time":"2016/8/2 13:48","series":"深圳成指","open":19,"high":19.1,"low":18.79,"close":18.79},
    {"time":"2016/8/2 13:49","series":"深圳成指","open":18.81,"high":18.94,"low":18.55,"close":18.71},
    {"time":"2016/8/2 13:50","series":"深圳成指","open":18.8,"high":18.84,"low":18.43,"close":18.43},
    {"time":"2016/8/2 13:51","series":"深圳成指","open":18.32,"high":18.55,"low":18.32,"close":18.47},
    {"time":"2016/8/2 13:52","series":"深圳成指","open":18.47,"high":18.54,"low":18.34,"close":18.48},
    {"time":"2016/8/2 13:53","series":"深圳成指","open":18.41,"high":18.41,"low":18.07,"close":18.2},
    {"time":"2016/8/2 13:54","series":"深圳成指","open":18.02,"high":18.3,"low":18,"close":18},
    {"time":"2016/8/2 13:55","series":"深圳成指","open":17.99,"high":18.22,"low":17.68,"close":18.2},
    {"time":"2016/8/2 13:56","series":"深圳成指","open":18.07,"high":18.16,"low":17.7,"close":18.02},
    {"time":"2016/8/2 13:57","series":"深圳成指","open":17.82,"high":18,"low":17.72,"close":17.8},
    {"time":"2016/8/2 13:58","series":"深圳成指","open":17.72,"high":18.49,"low":17.7,"close":18.28},
    {"time":"2016/8/2 13:59","series":"深圳成指","open":18.08,"high":18.53,"low":18.03,"close":18.5},
    {"time":"2016/8/2 14:00","series":"深圳成指","open":18.47,"high":18.55,"low":18.21,"close":18.3},
    {"time":"2016/8/2 14:01","series":"深圳成指","open":18.52,"high":18.88,"low":18.37,"close":18.74},
    {"time":"2016/8/2 14:02","series":"深圳成指","open":18.69,"high":18.78,"low":18.54,"close":18.75},
    {"time":"2016/8/2 14:03","series":"深圳成指","open":18.69,"high":18.69,"low":18.56,"close":18.61},
    {"time":"2016/8/2 14:04","series":"深圳成指","open":18.69,"high":18.85,"low":18.56,"close":18.65},
    {"time":"2016/8/2 14:05","series":"深圳成指","open":18.55,"high":18.79,"low":18.55,"close":18.74},
    {"time":"2016/8/2 14:06","series":"深圳成指","open":18.59,"high":18.82,"low":18.59,"close":18.73},
    {"time":"2016/8/2 14:07","series":"深圳成指","open":18.73,"high":18.81,"low":18.55,"close":18.67},
    {"time":"2016/8/2 14:08","series":"深圳成指","open":18.67,"high":18.93,"low":18.64,"close":18.9},
    {"time":"2016/8/2 14:09","series":"深圳成指","open":18.76,"high":19.12,"low":18.76,"close":18.87},
    {"time":"2016/8/2 14:10","series":"深圳成指","open":18.72,"high":18.95,"low":18.72,"close":18.87},
    {"time":"2016/8/2 14:11","series":"深圳成指","open":18.87,"high":18.99,"low":18.71,"close":18.84},
    {"time":"2016/8/2 14:12","series":"深圳成指","open":18.67,"high":18.89,"low":18.67,"close":18.77},
    {"time":"2016/8/2 14:13","series":"深圳成指","open":18.76,"high":18.88,"low":18.69,"close":18.7},
    {"time":"2016/8/2 14:14","series":"深圳成指","open":18.66,"high":18.78,"low":18.02,"close":18.38},
    {"time":"2016/8/2 14:15","series":"深圳成指","open":18.36,"high":18.74,"low":18.1,"close":18.72},
    {"time":"2016/8/2 14:16","series":"深圳成指","open":18.69,"high":18.89,"low":18.5,"close":18.62},
    {"time":"2016/8/2 14:17","series":"深圳成指","open":18.6,"high":18.68,"low":18.4,"close":18.41},
    {"time":"2016/8/2 14:18","series":"深圳成指","open":18.4,"high":18.7,"low":18.3,"close":18.67},
    {"time":"2016/8/2 14:19","series":"深圳成指","open":18.6,"high":18.76,"low":18.39,"close":18.66},
    {"time":"2016/8/2 14:20","series":"深圳成指","open":18.51,"high":18.68,"low":18.32,"close":18.51},
    {"time":"2016/8/2 14:21","series":"深圳成指","open":18.55,"high":18.55,"low":18.38,"close":18.52},
    {"time":"2016/8/2 14:22","series":"深圳成指","open":18.52,"high":18.6,"low":18.43,"close":18.53},
    {"time":"2016/8/2 14:23","series":"深圳成指","open":18.44,"high":18.5,"low":18.23,"close":18.26},
    {"time":"2016/8/2 14:24","series":"深圳成指","open":18.1,"high":18.4,"low":18.08,"close":18.31},
    {"time":"2016/8/2 14:25","series":"深圳成指","open":18.17,"high":18.4,"low":18.17,"close":18.34},
    {"time":"2016/8/2 14:26","series":"深圳成指","open":18.25,"high":18.37,"low":17.77,"close":18.05},
    {"time":"2016/8/2 14:27","series":"深圳成指","open":17.98,"high":18.18,"low":17.95,"close":18.08},
    {"time":"2016/8/2 14:28","series":"深圳成指","open":18.03,"high":18.19,"low":17.91,"close":17.94},
    {"time":"2016/8/2 14:29","series":"深圳成指","open":17.81,"high":18.21,"low":17.81,"close":18.15},
    {"time":"2016/8/2 14:30","series":"深圳成指","open":18.23,"high":18.23,"low":18.04,"close":18.08},
    {"time":"2016/8/2 14:31","series":"深圳成指","open":18.18,"high":18.23,"low":18.01,"close":18.15},
    {"time":"2016/8/2 14:32","series":"深圳成指","open":18.15,"high":18.27,"low":17.96,"close":18.27},
    {"time":"2016/8/2 14:33","series":"深圳成指","open":18.16,"high":18.25,"low":18,"close":18.11},
    {"time":"2016/8/2 14:34","series":"深圳成指","open":18.19,"high":18.22,"low":17.71,"close":17.93},
    {"time":"2016/8/2 14:35","series":"深圳成指","open":17.81,"high":17.86,"low":17.55,"close":17.55},
    {"time":"2016/8/2 14:36","series":"深圳成指","open":17.54,"high":17.75,"low":17.34,"close":17.55},
    {"time":"2016/8/2 14:37","series":"深圳成指","open":17.55,"high":17.64,"low":17.36,"close":17.42},
    {"time":"2016/8/2 14:38","series":"深圳成指","open":17.42,"high":17.57,"low":17.31,"close":17.37},
    {"time":"2016/8/2 14:39","series":"深圳成指","open":17.37,"high":17.59,"low":17.1,"close":17.21},
    {"time":"2016/8/2 14:40","series":"深圳成指","open":17.21,"high":17.35,"low":16.42,"close":16.63},
    {"time":"2016/8/2 14:41","series":"深圳成指","open":16.51,"high":16.92,"low":16.43,"close":16.91},
    {"time":"2016/8/2 14:42","series":"深圳成指","open":16.81,"high":17.54,"low":16.71,"close":17.09},
    {"time":"2016/8/2 14:43","series":"深圳成指","open":17.18,"high":17.18,"low":16.82,"close":16.91},
    {"time":"2016/8/2 14:44","series":"深圳成指","open":16.9,"high":17.22,"low":16.85,"close":17.18},
    {"time":"2016/8/2 14:45","series":"深圳成指","open":17.38,"high":17.38,"low":16.95,"close":17.28},
    {"time":"2016/8/2 14:46","series":"深圳成指","open":17.3,"high":17.3,"low":17.05,"close":17.12},
    {"time":"2016/8/2 14:47","series":"深圳成指","open":17.15,"high":17.28,"low":16.98,"close":17.1},
    {"time":"2016/8/2 14:48","series":"深圳成指","open":17.01,"high":17.1,"low":16.89,"close":16.95},
    {"time":"2016/8/2 14:49","series":"深圳成指","open":16.97,"high":17.56,"low":16.95,"close":17.5},
    {"time":"2016/8/2 14:50","series":"深圳成指","open":17.54,"high":17.7,"low":17.38,"close":17.44},
    {"time":"2016/8/2 14:51","series":"深圳成指","open":17.45,"high":17.66,"low":17.23,"close":17.42},
    {"time":"2016/8/2 14:52","series":"深圳成指","open":17.39,"high":17.55,"low":17.3,"close":17.48},
    {"time":"2016/8/2 14:53","series":"深圳成指","open":17.48,"high":17.52,"low":17.2,"close":17.48},
    {"time":"2016/8/2 14:54","series":"深圳成指","open":17.49,"high":17.66,"low":17.35,"close":17.53},
    {"time":"2016/8/2 14:55","series":"深圳成指","open":17.52,"high":17.88,"low":17.47,"close":17.77},
    {"time":"2016/8/2 14:56","series":"深圳成指","open":17.77,"high":18.19,"low":17.69,"close":18.09},
    {"time":"2016/8/2 14:57","series":"深圳成指","open":18.04,"high":18.21,"low":18.02,"close":18.15},
    {"time":"2016/8/2 14:58","series":"深圳成指","open":18.15,"high":18.28,"low":17.9,"close":17.96},
    {"time":"2016/8/2 14:59","series":"深圳成指","open":18,"high":18.25,"low":17.85,"close":18.22},
    {"time":"2016/8/2 15:00","series":"深圳成指","open":18,"high":18.25,"low":17.85,"close":18.22}
];

var klineData2 = [
    {
        time: "2016/8/2 09:30",
        series: "深圳成指",
        open: 19.8,
        high: 20.04,
        low: 19.75,
        close: 19.91
    }, {
        time: "2016/8/2 10:30",
        series: "深圳成指",
        open: 22.12,
        high: 22.3,
        low: 21.81,
        close: 21.98
    }, {
        time: "2016/8/2 11:30",
        series: "深圳成指",
        open: 19.98,
        high: 20.4,
        low: 19.8,
        close: 20.18
    }, {
        time: "2016/8/2 14:00",
        series: "深圳成指",
        open: 21.87,
        high: 21.94,
        low: 21.53,
        close: 21.58
    }, {
        time: "2016/8/2 15:00",
        series: "深圳成指",
        open: 19.61,
        high: 20.25,
        low: 19.50,
        close: 20.18
    }
];

module.exports = {
    getKlineData1: function() {
        return klineData1;
    },
    getKlineData2: function() {
        return klineData2
    }
};
