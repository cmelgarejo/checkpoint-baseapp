import Dashboard from 'views/Dashboard/Dashboard.jsx'
import Buttons from 'views/Components/Buttons.jsx'
import GridSystem from 'views/Components/GridSystem.jsx'
import Panels from 'views/Components/Panels.jsx'
import SweetAlert from 'views/Components/SweetAlert.jsx'
import Notifications from 'views/Components/Notifications.jsx'
import Icons from 'views/Components/Icons.jsx'
import Typography from 'views/Components/Typography.jsx'
import RegularForms from 'views/Forms/RegularForms.jsx'
import ExtendedForms from 'views/Forms/ExtendedForms.jsx'
import ValidationForms from 'views/Forms/ValidationForms.jsx'
import Wizard from 'views/Forms/Wizard.jsx'
import RegularTables from 'views/Tables/RegularTables.jsx'
import ExtendedTables from 'views/Tables/ExtendedTables.jsx'
import ReactTables from 'views/Tables/ReactTables.jsx'
import GoogleMaps from 'views/Maps/GoogleMaps.jsx'
import FullScreenMap from 'views/Maps/FullScreenMap.jsx'
import VectorMap from 'views/Maps/VectorMap.jsx'
import Charts from 'views/Charts/Charts.jsx'
import Calendar from 'views/Calendar/Calendar.jsx'
import Widgets from 'views/Widgets/Widgets.jsx'
import UserProfile from 'views/Pages/UserProfile.jsx'
import TimelinePage from 'views/Pages/Timeline.jsx'
import VenuesMap from 'views/Venues/containers/Map'

// @material-ui/icons
import DashboardIcon from '@material-ui/icons/Dashboard'
import Image from '@material-ui/icons/Image'
import Apps from '@material-ui/icons/Apps'
// import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from '@material-ui/icons/GridOn'
import Place from '@material-ui/icons/Place'
import WidgetsIcon from '@material-ui/icons/Widgets'
import Timeline from '@material-ui/icons/Timeline'
import DateRange from '@material-ui/icons/DateRange'
import LocationIcon from '@material-ui/icons/LocationOn'

var pages = [
  {
    path: '/app/timeline-page',
    name: 'Timeline Page',
    mini: 'TP',
    component: TimelinePage
  },
  {
    path: '/app/user-page',
    name: 'User Profile',
    mini: 'UP',
    component: UserProfile
  }
]

var dashRoutes = [
  {
    allow: ['user'],
    path: '/app/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    collapse: true,
    path: '/app/-page',
    name: 'Pages',
    state: 'openPages',
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: '/app/components',
    name: 'Components',
    state: 'openComponents',
    icon: Apps,
    views: [
      {
        path: '/app/components/buttons',
        name: 'Buttons',
        mini: 'B',
        component: Buttons
      },
      {
        path: '/app/components/grid-system',
        name: 'Grid System',
        mini: 'GS',
        component: GridSystem
      },
      {
        path: '/app/components/panels',
        name: 'Panels',
        mini: 'P',
        component: Panels
      },
      {
        path: '/app/components/sweet-alert',
        name: 'Sweet Alert',
        mini: 'SA',
        component: SweetAlert
      },
      {
        path: '/app/components/notifications',
        name: 'Notifications',
        mini: 'N',
        component: Notifications
      },
      {
        path: '/app/components/icons',
        name: 'Icons',
        mini: 'I',
        component: Icons
      },
      {
        path: '/app/components/typography',
        name: 'Typography',
        mini: 'T',
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: '/app/forms',
    name: 'Forms',
    state: 'openForms',
    icon: 'content_paste',
    views: [
      {
        path: '/app/forms/regular-forms',
        name: 'Regular Forms',
        mini: 'RF',
        component: RegularForms
      },
      {
        path: '/app/forms/extended-forms',
        name: 'Extended Forms',
        mini: 'EF',
        component: ExtendedForms
      },
      {
        path: '/app/forms/validation-forms',
        name: 'Validation Forms',
        mini: 'VF',
        component: ValidationForms
      },
      {
        path: '/app/forms/wizard',
        name: 'Wizard',
        mini: 'W',
        component: Wizard
      }
    ]
  },
  {
    collapse: true,
    path: '/app/tables',
    name: 'Tables',
    state: 'openTables',
    icon: GridOn,
    views: [
      {
        path: '/app/tables/regular-tables',
        name: 'Regular Tables',
        mini: 'RT',
        component: RegularTables
      },
      {
        path: '/app/tables/extended-tables',
        name: 'Extended Tables',
        mini: 'ET',
        component: ExtendedTables
      },
      {
        path: '/app/tables/react-tables',
        name: 'React Tables',
        mini: 'RT',
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: '/app/maps',
    name: 'Maps',
    state: 'openMaps',
    icon: Place,
    views: [
      {
        path: '/app/maps/google-maps',
        name: 'Google Maps',
        mini: 'GM',
        component: GoogleMaps
      },
      {
        path: '/app/maps/full-screen-maps',
        name: 'Full Screen Map',
        mini: 'FSM',
        component: FullScreenMap
      },
      {
        path: '/app/maps/vector-maps',
        name: 'Vector Map',
        mini: 'VM',
        component: VectorMap
      }
    ]
  },
  {
    path: '/app/widgets',
    name: 'Widgets',
    icon: WidgetsIcon,
    component: Widgets
  },
  {
    path: '/app/charts',
    name: 'Charts',
    icon: Timeline,
    component: Charts
  },
  {
    path: '/app/calendar',
    name: 'Calendar',
    icon: DateRange,
    component: Calendar
  },
  {
    allow: ['user'],
    path: '/app/venues',
    name: 'Venues',
    icon: LocationIcon,
    component: VenuesMap
  },
  {
    //The redirect one ALWAYS has to be the last in the list
    redirect: true,
    path: '/app',
    pathTo: '/app/dashboard',
    name: 'Dashboard'
  }
]
export default dashRoutes
