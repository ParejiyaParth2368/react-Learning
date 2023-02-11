import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import './technologies.css'

// Frontend
import AngularJSDark from '../../assets/icons/Technologies/Frontend/Dark/AngularJS.png'
import CSS3Dark from '../../assets/icons/Technologies/Frontend/Dark/CSS3.png'
import HTML5Dark from '../../assets/icons/Technologies/Frontend/Dark/HTML5.png'
import JavaScriptDark from '../../assets/icons/Technologies/Frontend/Dark/JavaScript.png'
import ReactJSDark from '../../assets/icons/Technologies/Frontend/Dark/ReactJS.png'
import TezJSDark from '../../assets/icons/Technologies/Frontend/Dark/TezJS.png'
import VuejsDark from '../../assets/icons/Technologies/Frontend/Dark/Vue.js.png'
import AngularJSLight from '../../assets/icons/Technologies/Frontend/Light/AngularJS.png'
import CSS3Light from '../../assets/icons/Technologies/Frontend/Light/CSS3.png'
import HTML5Light from '../../assets/icons/Technologies/Frontend/Light/HTML5.png'
import JavaScriptLight from '../../assets/icons/Technologies/Frontend/Light/JavaScript.png'
import ReactJSLight from '../../assets/icons/Technologies/Frontend/Light/ReactJS.png'
import TezJSLight from '../../assets/icons/Technologies/Frontend/Light/TezJS.png'
import VuejsLight from '../../assets/icons/Technologies/Frontend/Light/Vue.js.png'
// Backend
import CHasDark from '../../assets/icons/Technologies/Backend/Dark/C#.png'
import CplusDark from '../../assets/icons/Technologies/Backend/Dark/C++.png'
import DotNETCoreDark from '../../assets/icons/Technologies/Backend/Dark/dotNET Core.png'
import DotNETDark from '../../assets/icons/Technologies/Backend/Dark/dotNET.png'
import NodejsDark from '../../assets/icons/Technologies/Backend/Dark/Nodejs.png'
import PHPDark from '../../assets/icons/Technologies/Backend/Dark/PHP.png'
import CHasLight from '../../assets/icons/Technologies/Backend/Light/C#.png'
import CplusLight from '../../assets/icons/Technologies/Backend/Light/C++.png'
import DotNETCoreLight from '../../assets/icons/Technologies/Backend/Light/dotNET Core.png'
import DotNETLight from '../../assets/icons/Technologies/Backend/Light/dotNET.png'
import NodejsLight from '../../assets/icons/Technologies/Backend/Light/Nodejs.png'
import PHPLight from '../../assets/icons/Technologies/Backend/Light/PHP.png'
// Mobile
import AndroidDark from '../../assets/icons/Technologies/Mobile/Dark/Android.png'
import FlutterDark from '../../assets/icons/Technologies/Mobile/Dark/Flutter.png'
import IonicDark from '../../assets/icons/Technologies/Mobile/Dark/Ionic.png'
import iOSDark from '../../assets/icons/Technologies/Mobile/Dark/iOS.png'
import ReactNativeDark from '../../assets/icons/Technologies/Mobile/Dark/React Native.png'
import SwiftDark from '../../assets/icons/Technologies/Mobile/Dark/Swift.png'
import XamarinDark from '../../assets/icons/Technologies/Mobile/Dark/Xamarin.png'
import AndroidLight from '../../assets/icons/Technologies/Mobile/Light/Android.png'
import FlutterLight from '../../assets/icons/Technologies/Mobile/Light/Flutter.png'
import IonicLight from '../../assets/icons/Technologies/Mobile/Light/Ionic.png'
import iOSLight from '../../assets/icons/Technologies/Mobile/Light/iOS.png'
import ReactNativeLight from '../../assets/icons/Technologies/Mobile/Light/React Native.png'
import SwiftLight from '../../assets/icons/Technologies/Mobile/Light/Swift.png'
import XamarinLight from '../../assets/icons/Technologies/Mobile/Light/Xamarin.png'
// Database
import DynamoDBDark from '../../assets/icons/Technologies/Database/Dark/DynamoDB.png'
import FirebaseDark from '../../assets/icons/Technologies/Database/Dark/Firebase.png'
import MongoDBDark from '../../assets/icons/Technologies/Database/Dark/MongoDB.png'
import MySQLDark from '../../assets/icons/Technologies/Database/Dark/MySQL.png'
import OracleDark from '../../assets/icons/Technologies/Database/Dark/Oracle.png'
import PostgreSQLDark from '../../assets/icons/Technologies/Database/Dark/PostgreSQL.png'
import SQLServerDark from '../../assets/icons/Technologies/Database/Dark/SQL Server.png'
import SQLiteDark from '../../assets/icons/Technologies/Database/Dark/SQLite.png'
import DynamoDBLight from '../../assets/icons/Technologies/Database/Light/DynamoDB.png'
import FirebaseLight from '../../assets/icons/Technologies/Database/Light/Firebase.png'
import MongoDBLight from '../../assets/icons/Technologies/Database/Light/MongoDB.png'
import MySQLLight from '../../assets/icons/Technologies/Database/Light/MySQL.png'
import OracleLight from '../../assets/icons/Technologies/Database/Light/Oracle.png'
import PostgreSQLLight from '../../assets/icons/Technologies/Database/Light/PostgreSQL.png'
import SQLServerLight from '../../assets/icons/Technologies/Database/Light/SQL Server.png'
import SQLiteLight from '../../assets/icons/Technologies/Database/Light/SQLite.png'
// Frameworks
import CakePHPDark from '../../assets/icons/Technologies/Frameworks/Dark/CakePHP.png'
import CodelgnitorDark from '../../assets/icons/Technologies/Frameworks/Dark/Codelgnitor.png'
import LaravelDark from '../../assets/icons/Technologies/Frameworks/Dark/Laravel.png'
import MEANDark from '../../assets/icons/Technologies/Frameworks/Dark/MEAN.png'
import RxwebioDark from '../../assets/icons/Technologies/Frameworks/Dark/Rxwebio.png'
import CakePHPLight from '../../assets/icons/Technologies/Frameworks/Light/CakePHP.png'
import CodelgnitorLight from '../../assets/icons/Technologies/Frameworks/Light/Codelgnitor.png'
import LaravelLight from '../../assets/icons/Technologies/Frameworks/Light/Laravel.png'
import MEANLight from '../../assets/icons/Technologies/Frameworks/Light/MEAN.png'
import RxwebioLight from '../../assets/icons/Technologies/Frameworks/Light/Rxwebio.png'
// Cloud
import AWSDark from '../../assets/icons/Technologies/Cloud/Dark/AWS.png'
import GooglCloudDark from '../../assets/icons/Technologies/Cloud/Dark/Google Cloud.png'
import MicrosoftAzureDark from '../../assets/icons/Technologies/Cloud/Dark/Microsoft Azure.png'
import AWSLight from '../../assets/icons/Technologies/Cloud/Light/AWS.png'
import GooglCloudLight from '../../assets/icons/Technologies/Cloud/Light/Google Cloud.png'
import MicrosoftAzureLight from '../../assets/icons/Technologies/Cloud/Light/Microsoft Azure.png'
// DevOps
import DockerDark from '../../assets/icons/Technologies/DevOps/Dark/Docker.png'
import GradleDark from '../../assets/icons/Technologies/DevOps/Dark/Gradle.png'
import JenkinsDark from '../../assets/icons/Technologies/DevOps/Dark/Jenkins.png'
import KubernetesDark from '../../assets/icons/Technologies/DevOps/Dark/Kubernetes.png'
import MicrosoftazureDark from '../../assets/icons/Technologies/DevOps/Dark/Microsoft Azure.png'
import SeleniumDark from '../../assets/icons/Technologies/DevOps/Dark/Selenium.png'
import DockerLight from '../../assets/icons/Technologies/DevOps/Light/Docker.png'
import GradleLight from '../../assets/icons/Technologies/DevOps/Light/Gradle.png'
import JenkinsLight from '../../assets/icons/Technologies/DevOps/Light/Jenkins.png'
import KubernetesLight from '../../assets/icons/Technologies/DevOps/Light/Kubernetes.png'
import MicrosoftazureLight from '../../assets/icons/Technologies/DevOps/Light/Microsoft Azure.png'
import SeleniumLight from '../../assets/icons/Technologies/DevOps/Light/Selenium.png'
// Ecommerce
import KenticoDark from '../../assets/icons/Technologies/Ecommerce/Dark/Kentico.png'
import MagentoDark from '../../assets/icons/Technologies/Ecommerce/Dark/Magento.png'
import NopCommerceDark from '../../assets/icons/Technologies/Ecommerce/Dark/NopCommerce.png'
import ShopifyDark from '../../assets/icons/Technologies/Ecommerce/Dark/Shopify.png'
import WooCommerceDark from '../../assets/icons/Technologies/Ecommerce/Dark/WooCommerce.png'
import KenticoLight from '../../assets/icons/Technologies/Ecommerce/Light/Kentico.png'
import MagentoLight from '../../assets/icons/Technologies/Ecommerce/Light/Magento.png'
import NopCommerceLight from '../../assets/icons/Technologies/Ecommerce/Light/NopCommerce.png'
import ShopifyLight from '../../assets/icons/Technologies/Ecommerce/Light/Shopify.png'
import WooCommerceLight from '../../assets/icons/Technologies/Ecommerce/Light/WooCommerce.png'
// CMS
import DotNetNukeDark from '../../assets/icons/Technologies/CMS/Dark/DotNetNuke.png'
import JoomlaDark from '../../assets/icons/Technologies/CMS/Dark/Joomla.png'
import KenticODark from '../../assets/icons/Technologies/CMS/Dark/Kentico.png'
import SitefinityDark from '../../assets/icons/Technologies/CMS/Dark/Sitefinity.png'
import WordPressDark from '../../assets/icons/Technologies/CMS/Dark/WordPress.png'
import DotNetNukeLight from '../../assets/icons/Technologies/CMS/Light/DotNetNuke.png'
import JoomlaLight from '../../assets/icons/Technologies/CMS/Light/Joomla.png'
import KenticOLight from '../../assets/icons/Technologies/CMS/Light/Kentico.png'
import SitefinityLight from '../../assets/icons/Technologies/CMS/Light/Sitefinity.png'
import WordPressLight from '../../assets/icons/Technologies/CMS/Light/WordPress.png'
// Platforms
import MSDynamicsCRMDark from '../../assets/icons/Technologies/Platforms/Dark/MS Dynamics CRM.png'
import PowerBIDark from '../../assets/icons/Technologies/Platforms/Dark/Power BI.png'
import ZohoDark from '../../assets/icons/Technologies/Platforms/Dark/Zoho.png'
import MSDynamicsCRMLight from '../../assets/icons/Technologies/Platforms/Light/MS Dynamics CRM.png'
import PowerBILight from '../../assets/icons/Technologies/Platforms/Light/Power BI.png'
import ZohoLight from '../../assets/icons/Technologies/Platforms/Light/Zoho.png'


const Technologies = ({ mode }) => {
    return (
        <div className="technologies">
            <div className="container-fluid">
                <div className="technologies_content">
                    <div className="technologies_header mb-5">
                        <div className="title mb-3">
                            <h2>Technologies and Platforms We Use</h2>
                        </div>
                    </div>
                    <div className="technologies_body">
                        <Tabs className="technologies_tabs">
                            <div className="technologies_tabs_box">
                                <TabList className="technologies_tabs_row">
                                    <Tab className="technologies_tab">Frontend</Tab>
                                    <Tab className="technologies_tab">Backend</Tab>
                                    <Tab className="technologies_tab">Mobile</Tab>
                                    <Tab className="technologies_tab">Database</Tab>
                                    <Tab className="technologies_tab">Frameworks</Tab>
                                    <Tab className="technologies_tab">Cloud</Tab>
                                    <Tab className="technologies_tab">DevOps</Tab>
                                    <Tab className="technologies_tab">Ecommerce</Tab>
                                    <Tab className="technologies_tab">CMS</Tab>
                                    <Tab className="technologies_tab">Platforms</Tab>
                                </TabList>
                            </div>
                            <div className="technologies_tabPanel_box">
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={AngularJSDark} alt='AngularJS' />
                                                :
                                                <img className="technologies_icon" src={AngularJSLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >AngularJS</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={CSS3Dark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={CSS3Light} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >CSS3</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={HTML5Dark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={HTML5Light} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >HTML5</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={JavaScriptDark} alt='JavaScript' />
                                                :
                                                <img className="technologies_icon" src={JavaScriptLight} alt='JavaScript' />
                                            }
                                            <span className="technologies_title" >JavaScript</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={ReactJSDark} alt='ReactJS' />
                                                :
                                                <img className="technologies_icon" src={ReactJSLight} alt='ReactJS' />
                                            }
                                            <span className="technologies_title" >ReactJS</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={TezJSDark} alt='TezJS' />
                                                :
                                                <img className="technologies_icon" src={TezJSLight} alt='TezJS' />
                                            }
                                            <span className="technologies_title" >TezJS</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={VuejsDark} alt='Vue.js' />
                                                :
                                                <img className="technologies_icon" src={VuejsLight} alt='Vue.js' />
                                            }
                                            <span className="technologies_title" >Vue.js</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={CHasDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={CHasLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >C#</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={CplusDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={CplusLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >C++</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={DotNETCoreDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={DotNETCoreLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >.NET Core</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={DotNETDark} alt='JavaScript' />
                                                :
                                                <img className="technologies_icon" src={DotNETLight} alt='JavaScript' />
                                            }
                                            <span className="technologies_title" >.NET</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={NodejsDark} alt='ReactJS' />
                                                :
                                                <img className="technologies_icon" src={NodejsLight} alt='ReactJS' />
                                            }
                                            <span className="technologies_title" >Node.js</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={PHPDark} alt='TezJS' />
                                                :
                                                <img className="technologies_icon" src={PHPLight} alt='TezJS' />
                                            }
                                            <span className="technologies_title" >PHP</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={AndroidDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={AndroidLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >Android</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={FlutterDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={FlutterLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >Flutter</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={IonicDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={IonicLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >Ionic</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={iOSDark} alt='JavaScript' />
                                                :
                                                <img className="technologies_icon" src={iOSLight} alt='JavaScript' />
                                            }
                                            <span className="technologies_title" >iOS</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={ReactNativeDark} alt='ReactJS' />
                                                :
                                                <img className="technologies_icon" src={ReactNativeLight} alt='ReactJS' />
                                            }
                                            <span className="technologies_title" >React Native</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={SwiftDark} alt='TezJS' />
                                                :
                                                <img className="technologies_icon" src={SwiftLight} alt='TezJS' />
                                            }
                                            <span className="technologies_title" >Swift</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={XamarinDark} alt='TezJS' />
                                                :
                                                <img className="technologies_icon" src={XamarinLight} alt='TezJS' />
                                            }
                                            <span className="technologies_title" >Xamarin</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={DynamoDBDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={DynamoDBLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >DynamoDB</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={FirebaseDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={FirebaseLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >Firebase</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={MongoDBDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={MongoDBLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >MongoDBDark</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={MySQLDark} alt='JavaScript' />
                                                :
                                                <img className="technologies_icon" src={MySQLLight} alt='JavaScript' />
                                            }
                                            <span className="technologies_title" >MySQL</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={OracleDark} alt='ReactJS' />
                                                :
                                                <img className="technologies_icon" src={OracleLight} alt='ReactJS' />
                                            }
                                            <span className="technologies_title" >Oracle</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={PostgreSQLDark} alt='TezJS' />
                                                :
                                                <img className="technologies_icon" src={PostgreSQLLight} alt='TezJS' />
                                            }
                                            <span className="technologies_title" >PostgreSQL</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={SQLServerDark} alt='TezJS' />
                                                :
                                                <img className="technologies_icon" src={SQLServerLight} alt='TezJS' />
                                            }
                                            <span className="technologies_title" >SQLServer</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={SQLiteDark} alt='TezJS' />
                                                :
                                                <img className="technologies_icon" src={SQLiteLight} alt='TezJS' />
                                            }
                                            <span className="technologies_title" >SQLite</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={CakePHPDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={CakePHPLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >CakePHP</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={CodelgnitorDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={CodelgnitorLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >Codelgnitor</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={LaravelDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={LaravelLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >Laravel</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={MEANDark} alt='JavaScript' />
                                                :
                                                <img className="technologies_icon" src={MEANLight} alt='JavaScript' />
                                            }
                                            <span className="technologies_title" >MEAN</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={RxwebioDark} alt='ReactJS' />
                                                :
                                                <img className="technologies_icon" src={RxwebioLight} alt='ReactJS' />
                                            }
                                            <span className="technologies_title" >Rxwebio</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={AWSDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={AWSLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >AWS</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={GooglCloudDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={GooglCloudLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >GooglCloud</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={MicrosoftAzureDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={MicrosoftAzureLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >MicrosoftAzure</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={DockerDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={DockerLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >Docker</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={GradleDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={GradleLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >Gradle</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={JenkinsDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={JenkinsLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >Jenkins</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={KubernetesDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={KubernetesLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >Kubernetes</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={MicrosoftazureDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={MicrosoftazureLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >MicrosoftAzure</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={SeleniumDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={SeleniumLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >Selenium</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={KenticoDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={KenticoLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >Kentico</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={MagentoDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={MagentoLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >Magento</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={NopCommerceDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={NopCommerceLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >NopCommerce</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={ShopifyDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={ShopifyLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >ShopifyDark</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={WooCommerceDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={WooCommerceLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >WooCommerce</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={DotNetNukeDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={DotNetNukeLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >DotNetNuke</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={JoomlaDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={JoomlaLight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >Joomla</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={KenticODark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={KenticOLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >Kentico</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={SitefinityDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={SitefinityLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >Sitefinity</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={WordPressDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={WordPressLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >WordPress</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={MSDynamicsCRMDark} alt='C#' />
                                                :
                                                <img className="technologies_icon" src={MSDynamicsCRMLight} alt='AngularJS' />
                                            }
                                            <span className="technologies_title" >MSDynamicsCRM</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={PowerBIDark} alt='CSS3' />
                                                :
                                                <img className="technologies_icon" src={PowerBILight} alt='CSS3' />
                                            }
                                            <span className="technologies_title" >PowerBI</span>
                                        </Link>
                                    </div>
                                    <div className="technologies_icon_title_box">
                                        <Link to='/'>
                                            {mode === "dark"
                                                ?
                                                <img className="technologies_icon" src={ZohoDark} alt='HTML5' />
                                                :
                                                <img className="technologies_icon" src={ZohoLight} alt='HTML5' />
                                            }
                                            <span className="technologies_title" >ZohoDark</span>
                                        </Link>
                                    </div>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies