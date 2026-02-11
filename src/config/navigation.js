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
      { title: "default", path: "/dashboard", icon: SpeedIcon },
      { title: "analytics", path: "/dashboard/analytics", icon: TrendingUpIcon },
      { title: "invoices", path: "/dashboard/invoices", icon: DescriptionIcon },
      { title: "crm", path: "/dashboard/crm", icon: PivotTableChartIcon },
      { title: "blog", path: "/dashboard/blog", icon: ArticleIcon },
      ],
    },
    {
      title: "widget",
      items: [
      { title: "statistics", path: "/dashboard/statistics", icon: DonutLargeIcon },
      { title: "data", path: "/dashboard/data", icon: DatasetIcon },
      { title: "chart", path: "/dashboard/chart", icon: AreaChartIcon }
      ],
    },
    {
      title: "Application",
      items: [
      { title: "users", path: "/dashboard/users", icon: PeopleAltIcon },
      { title: "customer", path: "/dashboard/customer", icon: HeadphonesIcon },
      { title: "chat", path: "/dashboard/chat", icon: ForumIcon },
      { title: "kanban", path: "/dashboard/kanban", icon: ViewKanbanIcon },
      { title: "mail", path: "/dashboard/mail", icon: EmailIcon },
      { title: "calendar", path: "/dashboard/calendar", icon: CalendarMonthIcon },
      { title: "contact", path: "/dashboard/contact", icon: ConnectWithoutContactIcon },
      ],
    },
]

export default navigation;