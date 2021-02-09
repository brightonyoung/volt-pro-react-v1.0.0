
import OverviewImg from "../assets/img/pages/overview.jpg";
import TrafficSourcesImg from "../assets/img/pages/traffic-sources.jpg";
import AppAnalysisImg from "../assets/img/pages/app-analysis.jpg";
import UsersImg from "../assets/img/pages/users-list.jpg";
import TransactionsImg from "../assets/img/pages/transactions.jpg";
import TasksImg from "../assets/img/pages/tasks.jpg";
import SettingsImg from "../assets/img/pages/settings.jpg";
import MessagesImg from "../assets/img/pages/messages.jpg";
import ChatImg from "../assets/img/pages/single-message.jpg";
import CalendarImg from "../assets/img/pages/calendar.jpg";
import BillingImg from "../assets/img/pages/billing.jpg";
import InvoiceImg from "../assets/img/pages/invoice.jpg";
import PricingImg from "../assets/img/pages/pricing.jpg";
import SignInImg from "../assets/img/pages/sign-in.jpg";
import SignUpImg from "../assets/img/pages/sign-up.jpg";
import LockImg from "../assets/img/pages/lock.jpg";
import ForgotPasswordImg from "../assets/img/pages/forgot-password.jpg";
import ResetPasswordImg from "../assets/img/pages/reset-password.jpg";
import NotFoundImg from "../assets/img/pages/404.jpg";
import ServerErrorImg from "../assets/img/pages/500.jpg";

import { Routes } from "../routes";


export default [
    {
        "id": 1,
        "name": "Overview",
        "image": OverviewImg,
        "link": Routes.DashboardOverview.path
    },
    {
        "id": 2,
        "name": "Traffic Sources",
        "image": TrafficSourcesImg,
        "link": Routes.DashboardTraffic.path
    },
    {
        "id": 3,
        "name": "App Analysis",
        "image": AppAnalysisImg,
        "link": Routes.DashboardProductAnalysis.path
    },
    {
        "id": 4,
        "name": "Users List",
        "image": UsersImg,
        "link": Routes.Users.path
    },
    {
        "id": 5,
        "name": "Transactions",
        "image": TransactionsImg,
        "link": Routes.Transactions.path
    },
    {
        "id": 6,
        "name": "Tasks",
        "image": TasksImg,
        "link": Routes.Tasks.path
    },
    {
        "id": 7,
        "name": "Settings",
        "image": SettingsImg,
        "link": Routes.Settings.path
    },
    {
        "id": 8,
        "name": "Messages",
        "image": MessagesImg,
        "link": Routes.Messages.path
    },
    {
        "id": 9,
        "name": "Chat",
        "image": ChatImg,
        "link": Routes.SingleMessage.path
    },
    {
        "id": 10,
        "name": "Calendar",
        "image": CalendarImg,
        "link": Routes.Calendar.path
    },
    {
        "id": 11,
        "name": "Billing",
        "image": BillingImg,
        "link": Routes.Billing.path
    },
    {
        "id": 12,
        "name": "Invoice",
        "image": InvoiceImg,
        "link": Routes.Invoice.path
    },
    {
        "id": 13,
        "name": "Pricing",
        "image": PricingImg,
        "link": Routes.Pricing.path
    },
    {
        "id": 14,
        "name": "Sign In",
        "image": SignInImg,
        "link": Routes.Signin
    },
    {
        "id": 15,
        "name": "Sign Up",
        "image": SignUpImg,
        "link": Routes.Signup.path
    },
    {
        "id": 16,
        "name": "Lock",
        "image": LockImg,
        "link": Routes.Lock.path
    },
    {
        "id": 17,
        "name": "Forgot password",
        "image": ForgotPasswordImg,
        "link": Routes.ForgotPassword.path
    },
    {
        "id": 18,
        "name": "Reset password",
        "image": ResetPasswordImg,
        "link": Routes.ResetPassword.path
    },
    {
        "id": 19,
        "name": "404",
        "image": NotFoundImg,
        "link": Routes.NotFound.path
    },
    {
        "id": 20,
        "name": "500",
        "image": ServerErrorImg,
        "link": Routes.ServerError.path
    }
]