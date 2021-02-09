
import moment from "moment-timezone";


export default [
    {
        "id": 1,
        "title": 'Call with Jane',
        "start": moment().startOf("month").add(17, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(18, "days").format("YYYY-MM-DD"),
        "className": 'bg-red'
    },
    {
        "id": 2,
        "title": 'Dinner meeting',
        "start": moment().startOf("month").add(20, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(21, "days").format("YYYY-MM-DD"),
        "className": 'bg-orange'
    },
    {
        "id": 3,
        "title": 'HackTM conference',
        "start": moment().startOf("month").add(28, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(29, "days").format("YYYY-MM-DD"),
        "className": 'bg-green'
    },
    {
        "id": 4,
        "title": 'Meeting with John',
        "start": moment().startOf("month").add(1, "month").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(1, "month").add(1, "day").format("YYYY-MM-DD"),
        "className": 'bg-blue'
    },
    {
        "id": 5,
        "title": 'Summer Hackaton',
        "start": moment().startOf("month").add(2, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(3, "days").format("YYYY-MM-DD"),
        "className": 'bg-purple'
    },
    {
        "id": 6,
        "title": 'Digital event',
        "start": moment().startOf("month").add(6, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(8, "days").format("YYYY-MM-DD"),
        "className": 'bg-info'
    },
    {
        "id": 7,
        "title": 'Marketing event',
        "start": moment().startOf("month").add(1, "month").add(9, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(1, "month").add(10, "days").format("YYYY-MM-DD"),
        "className": 'bg-blue'
    },
    {
        "id": 8,
        "title": 'Dinner with Parents',
        "start": moment().startOf("month").add(1, "month").add(19, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(1, "month").add(20, "days").format("YYYY-MM-DD"),
        "className": 'bg-red'
    },
    {
        "id": 9,
        "title": 'Important meeting with John',
        "start": moment().startOf("month").add(23, "days").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(24, "days").format("YYYY-MM-DD"),
        "className": 'bg-yellow'
    },
    {
        "id": 10,
        "title": 'Cyber Week',
        "start": moment().startOf("month").add(1, "month").add(1, "day").format("YYYY-MM-DD"),
        "end": moment().startOf("month").add(1, "month").add(2, "days").format("YYYY-MM-DD"),
        "className": 'bg-red'
    }
];