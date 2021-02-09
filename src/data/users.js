
import moment from "moment-timezone";

import Profile1 from "../assets/img/team/profile-picture-1.jpg"
import Profile2 from "../assets/img/team/profile-picture-2.jpg"
import Profile3 from "../assets/img/team/profile-picture-3.jpg"
import Profile4 from "../assets/img/team/profile-picture-4.jpg"

export default [
    {
        "id": 1,
        "image": Profile1,
        "verified": true,
        "status": "Active",
        "name": "Roy Fendley",
        "email": "example@themesberg.com",
        "dateCreated": moment().format("DD MMM YYYY"),
    },
    {
        "id": 2,
        "image": Profile3,
        "verified": true,
        "status": "Active",
        "name": "Bonnie Green",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
    },
    {
        "id": 3,
        "verified": true,
        "status": "Active",
        "name": "Scott Anderson",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(2, "days").format("DD MMM YYYY"),
    },
    {
        "id": 4,
        "verified": true,
        "status": "Active",
        "image": Profile4,
        "name": "Ronnie Buchanan",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(3, "days").format("DD MMM YYYY"),
    },
    {
        "id": 5,
        "verified": false,
        "status": "Inactive",
        "image": Profile3,
        "name": "Jane Rinehart",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(4, "days").format("DD MMM YYYY"),
    },
    {
        "id": 6,
        "verified": false,
        "status": "Pending",
        "name": "William Ginther",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(5, "days").format("DD MMM YYYY"),
    },
    {
        "id": 7,
        "image": Profile2,
        "verified": false,
        "status": "Pending",
        "name": "George Driskell",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(5, "days").format("DD MMM YYYY"),
    },
    {
        "id": 8,
        "image": Profile4,
        "verified": false,
        "status": "Suspended",
        "name": "Ronnie Buchanan",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(5, "days").format("DD MMM YYYY"),
    },
    {
        "id": 9,
        "verified": false,
        "status": "Suspended",
        "name": "Jane Rinehart",
        "email": "example@themesberg.com",
        "dateCreated": moment().subtract(6, "days").format("DD MMM YYYY"),
    }
]