import SpeedIcon from "@mui/icons-material/Speed";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DescriptionIcon from "@mui/icons-material/Description";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import ArticleIcon from "@mui/icons-material/Article";
import AreaChartIcon from '@mui/icons-material/AreaChart';
import DatasetIcon from '@mui/icons-material/Dataset';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ForumIcon from '@mui/icons-material/Forum';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const navigation = [
    {
      title: "dashboard",
      items: [
      { title: "default", path: "/dashboard", icon: <SpeedIcon sx={{ fontSize: 18 }} /> },
      { title: "analytics", path: "/dashboard/analytics", icon: <TrendingUpIcon sx={{ fontSize: 18 }} /> },
      { title: "invoices", path: "/dashboard/invoices", icon: <DescriptionIcon sx={{ fontSize: 18 }} /> },
      { title: "crm", path: "/dashboard/crm", icon: <PivotTableChartIcon sx={{ fontSize: 18 }} /> },
      { title: "blog", path: "/dashboard/blog", icon: <ArticleIcon sx={{ fontSize: 18 }} /> },
      ],
    },
    {
      title: "widget",
      items: [
      { title: "statistics", path: "/dashboard/statistics", icon: <DonutLargeIcon sx={{ fontSize: 18 }} /> },
      { title: "data", path: "/dashboard/data", icon: <DatasetIcon sx={{ fontSize: 18 }} /> },
      { title: "chart", path: "/dashboard/chart", icon: <AreaChartIcon sx={{ fontSize: 18 }} /> }
      ],
    },
    {
      title: "Application",
      items: [
      { title: "users", path: "/dashboard/users", icon: <PeopleAltIcon sx={{ fontSize: 18 }} /> },
      { title: "customer", path: "/dashboard/customer", icon: <HeadphonesIcon sx={{ fontSize: 18 }} /> },
      { title: "chat", path: "/dashboard/chat", icon: <ForumIcon sx={{ fontSize: 18 }} /> },
      { title: "kanban", path: "/dashboard/kanban", icon: <ViewKanbanIcon sx={{ fontSize: 18 }} /> },
      { title: "mail", path: "/dashboard/mail", icon: <EmailIcon sx={{ fontSize: 18 }} /> },
      { title: "calendar", path: "/dashboard/calendar", icon: <CalendarMonthIcon sx={{ fontSize: 18 }} /> },
      { title: "contact", path: "/dashboard/contact", icon: <ConnectWithoutContactIcon sx={{ fontSize: 18 }} /> },
      ],
    },
]

export default navigation;