
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons';

const trafficShares = [
    { id: 1, label: "Desktop", value: 60, color: "secondary", icon: faDesktop },
    { id: 2, label: "Mobile Web", value: 30, color: "primary", icon: faMobileAlt },
    { id: 3, label: "Tablet Web", value: 10, color: "tertiary", icon: faTabletAlt }
];

const trafficShares2 = [
    { id: 1, label: "Direct", value: 40, color: "tertiary" },
    { id: 2, label: "Referrals", value: 30, color: "secondary" },
    { id: 3, label: "Organic", value: 15, color: "primary" },
    { id: 4, label: "Social", value: 10, color: "warning" },
    { id: 5, label: "Mail", value: 5, color: "pink" }
];

const trafficVolumes = [
    { id: 1, label: "Direct", value: [2, 5, 2, 3, 4, 6, 8], color: "warning" },
    { id: 2, label: "Referrals", value: [5, 6, 5, 8, 12, 32, 28], color: "secondary" },
    { id: 3, label: "Organic", value: [7, 12, 7, 3, 2, 7, 14], color: "tertiary" },
    { id: 4, label: "Social", value: [10, 15, 13, 17, 14, 18, 20], color: "dark" },
    { id: 5, label: "Mail", value: [16, 18, 18, 20, 24, 22, 23], color: "pink" }
];

const totalOrders = [
    { id: 1, label: "July", value: [1, 5, 2, 5, 4, 3], color: "primary" },
    { id: 2, label: "August", value: [2, 3, 4, 8, 1, 2], color: "secondary" }
];

const appRanking = [
    { id: 1, label: "All", value: [5, 4, 3, 7, 5, 10, 3], color: "primary" },
    { id: 2, label: "Travel & Local", value: [2, 2, 1, 5, 3, 4, 2], color: "secondary" },
    { id: 3, label: "Widgets", value: [3, 2, 9, 5, 4, 6, 4], color: "tertiary" }
];

const trafficBySource = [
    { id: 1, label: "Google", value: 70, color: "primary" },
    { id: 2, label: "Yahoo", value: 20, color: "secondary" },
    { id: 3, label: "Yandex", value: 10, color: "tertiary" }
];

const trafficDistribution = [
    { id: 1, label: "Organic", value: 30, color: "primary" },
    { id: 2, label: "Direct", value: 50, color: "secondary" },
    { id: 3, label: "Paid", value: 20, color: "tertiary" }
];

export {
    trafficShares,
    trafficShares2,
    trafficVolumes,
    totalOrders,
    appRanking,
    trafficBySource,
    trafficDistribution
};