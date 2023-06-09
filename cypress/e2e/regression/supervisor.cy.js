import Suprevisor from '../../support/pages/Supervisor';
import { handlePoorConnectionPopup, ignoreSpeedTestPopup } from '../../support/Utils';

let testData;
const suprevisor = new Suprevisor();
let randNum = Math.floor(Math.random() * 100000);

describe('SuperVisor Flow', () => {
  before(() => {
    cy.readFile('cypress/fixtures/testData.json').then(
      (data) => (testData = data)
    );
    cy.visit('/', { failOnStatusCode: false });
    Cypress.Cookies.defaults({
      preserve: (cookies) => {
        return true;
      },
    });
  });

  beforeEach(() => {
    handlePoorConnectionPopup();
  })

  after(() => {
    cy.Logout();
  });

  it('Supervisor Should Login Successfully', () => {
    cy.Login(testData.SupervisorEmail, testData.password);
    cy.reload();
    ignoreSpeedTestPopup();
  });

  it('Verify the Dashboard Elements', () => {
    suprevisor.clickOnMainTab();
    suprevisor.verifyDashboardElementsBox([
      'Outbound Calls',                // 'Average Call Duration',
      'Connected Calls',                // 'Average Wait Time',
      'Avg. Call Duration',             // 'Average Abandon Time',
      'Avg. Agent Wait Time',           // 'Average Calls Per Agent Daily',
      'Abandon Rate',                   // 'Active Campaigns',
      'Active Campaigns',               // 'Active agents',
      'Leads Generated',                // 'Active Numbers',
      'Connect Rate',                   // 'Total DNC',
      'Dialing Time',                   // 'Total Calls',
      'Avg. CPA(Calls Per Agent)',      // 'Total Connects',
      'Calls Per Connect',              // 'Leads Generated',
      'Voicemails Reached',             // 'Average Agent Wait Time',
    ]);
    suprevisor.verifyDashboardGraphElementsBox([
      'Calls Summary',
      'Responsiveness',
      'Agent Analytics',                // 'Agents',
      'Best Time to Call',              // 'Total Calls',
      'Call Results',
      'Campaign Analytics',             // 'Calls Locations',
      'Avg. Agent Talk Time'            // 'Average Call Duration',
    ]);
  });

  it('Verify View Button Functionality for Contacts', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickViewBtn();
    suprevisor.verifyViewForm();
  });

  it('Verify Add Contact using Create New option', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickAddNewContactButton();
    suprevisor.selctCreateNewContactOption();
    suprevisor.verifyEditForm();
  });

  it('Verify Add Contact using Upload File option', () => {
    suprevisor.clickingOnContactOption();
    cy.wait(3000);
    suprevisor.clickAddNewContactButton();
    suprevisor.selectUploadFileOption();
    suprevisor.verifyUploadForm();
  });

  it('Verifies the Profile Page', () => {
    suprevisor.clickUserProfile();
    suprevisor.clickprofileButton();
    suprevisor.verifyProfilePage();
  });

  // Fixed according to the BAT-747
  it('Verify Supervisor can Login as Agent', () => {
    suprevisor.clickDashboardMenu();
    suprevisor.clickLoginAsBtn('Switch Account');
    suprevisor.clickOpenUser();
    suprevisor.loginWithUser(testData.agent);
    ignoreSpeedTestPopup();
    suprevisor.verifyLogin(testData.agent);
    suprevisor.clickOnProfile();
    suprevisor.clickBackToSupervisor();
    ignoreSpeedTestPopup();
    suprevisor.verifySupervisorProfile();
  });

  it('Verify the Reports SubMenu Items', () => {
    suprevisor.clickReportsMenu();
    suprevisor.verifyReportsHeaderElements([
      //'Live',
      'Recent Contacts',
      'Campaigns',
      'Agents',
      'Numbers',
      'Heat Map',
      'Floor Map',
    ]);
  });

  //rrport --> Live elements move to Dashboard page
  it.skip('Verify the Live section Elements of Report', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Live');
    suprevisor.verifyReportLiveElements([
      'Talking Time',
      'Active Calls',
      'Active Campaigns',
      'Missed Calls',
      'Abandoned Calls',
      'Remaining Redials',
      'Online Agents',
      'Remaining Leads',
      'In Queue',
      'Paused Agents',
      'Dialing Ratio',
      'Average Agent Wait Time',
    ]);
  });

  it('Verify the Recent Contact Elements of Report Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Recent Contacts');
    suprevisor.clickFilterButton();
    suprevisor.verifyRecentContactsDropdown([
      'All Calls',
      'Call Results',
      'Campaigns',
      'All Durations',
      'Mood',
    ]);
    suprevisor.verifyDatePicker();
  });

  it('Verify the Recent Contacts Table Headings', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Recent Contacts');
    suprevisor.verifyRecentContactsTableHeadings([
      'Call Type',
      'Date/Time',
      'Call From',
      'Customer Number',
      'Customer Name',
      'Agent',
      'Campaign',
      'Call Result',
      'Duration',
    ]);
  });

  it('Verify the Elements of Agent Section for Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.verifyDepartmentsDropdown();
    suprevisor.verifyAllCampaignsDropdown();
    suprevisor.verifyDatePicker();
    suprevisor.verifyExportButton('Agents');
  });

  it('Verify the Agents Table Headings', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.verifyRecentContactsTableHeadings([
      'Agent',
      'Logged Time',
      'Calls',
      'Answered',
      'Abandon',
      'Abandon Rate',
      'Available',
      'Break',
      'Lunch',
      'In training',
      'Out of desk',
      'On Call',
      'Wrap Up Time',
      'In Meeting',
      'Auto Pause',
      'PrepWork',
      'After Call',
    ]);
  });

  it('Verify the Agents Name in Reports Agent section', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.verifyReportsAgentName(testData.agent);
    suprevisor.verifyReportsAgentName(testData.AdminName);
  });

  it('verify the Agents Details in the Reports Agent section', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Agents');
    suprevisor.clickAgentsDetailsPlusBtn();
    suprevisor.verifyAgentsDetails([
      'Answered',
      'Appointments',
      'Leads',
      'Total',
      'Available',
      'Break',
      'Lunch',
      'In training',
      'Out of desk',
      'On Call',
      'Wrap Up Time',
      'In Meeting',
      'Auto Pause',
      'PrepWork',
      'After Call',
    ]);
  });

  it('Verify the Elements of Campaign section of Reports page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Campaigns');
    suprevisor.verifyAllStatusDropdown();
    suprevisor.verifyAllAgentsDropdown();
    suprevisor.verifyExportButton('Campaigns');
    suprevisor.verifyDatePicker();
  });

  it('Verify the Table headings of the Campaing section of Reports page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Campaigns');
    suprevisor.verifyCampaignsTableHeading([
      'Campaign',
      'Status',
      'Dials',
      'Answered',
      'BU',
      'CB',
      'NA',
      'Agents',
      'Contacts',
      'Completed',
    ]);
  });

  it('Verify the Elements of Number section in Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Numbers');
    suprevisor.verifySearchBox();
    suprevisor.verifyDatePicker();
  });

  it('Verify the Table headings of Number section in Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Numbers');
    suprevisor.verifyNumberSectionTableHeadings([
      'Phone Number',
      'Destination',
      'Inbound',
      'Outbound',
      'Added',
    ]);
  });

  it('Verify the Elements of Agent Heap Map in Reports Page', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Heat Map');
    suprevisor.verifyAllGroupsDropdown();
    suprevisor.verifyReportHeatRangePicker();
    suprevisor.verifyRangeSelectRadioBtns(['Day', 'Week', 'Month']);
  });

  it('Verifies the Floor Map Elements for Supervisor', () => {
    suprevisor.clickReportsMenu();
    suprevisor.clickReportsHeader('Floor Map');
    suprevisor.verifyAddNewFloorButton();
  });
});
