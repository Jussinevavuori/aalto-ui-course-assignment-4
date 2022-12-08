# Rooted Project

Aalto University - CS-E5220 User Interface Construction - Assignment 4

Implemented UI design for application for recording planted trees and viewing information about said trees.

---

## 1. Team

| Name | Number | Email |
|------|--------|-------|
| Jussi Nevavuori | 709097 | jussi.nevavuori@aalto.fi |
| Ivar Kerajärvi | 549163 | ivar.kerajarvi@aalto.fi |
| Otto Takkinen | 481276 | otto.takkinen@aalto.fi |
| Viola Palolahti | 732394 | viola.palolahti@aalto.fi |

---

## 2. Links

[Link to project preview online](https://aalto-ui-course-assignment-4.vercel.app/)

[Link to source code in GitHub repository](https://github.com/Jussinevavuori/aalto-ui-course-assignment-4)

**Note:** The project has been created with mobile screen sizes in mind. When opening on a desktop, please (1) open browser developer tools, (2) toggle device toolbar in top left corner of developer tools and (3) select a mobile phone dimensions for previewing.

---

## 3. UI Design

The entire UI is based on all individual works for each separate screen. Some details of the UI designs have been rethought to fit the context of the application better and all interfaces were given a uniform visual language.

---

### 3.1. Login screen

#### 3.1.1. Description

When the user opens the application, they are automatically greeted by a login screen. The login screen is a trivial functionality present in every application and we did not go into further detail on designing a UI for the subsequent login screens. Currently clicking any of the buttons will automatically "sign you in".

#### 3.1.2. Influence of individual works

No individual works modelled the login UI as it only replicates existing solutions to not confuse users with "redesigning a functional wheel".

---

### 3.2. Home screen

#### 3.2.1. Description

The home application is the default screen of the application. The primary action of users is to open the application and enter trees. That action has been made available as the default action and the user only requires to input an amount and press the submit button - the primary action is not hidden behind any clicks.

Submitting a record gives a success notification to act as feedback to the user - upon seeing the notification they are informed that their action was succesful, get a confirmation that the number they wanted to input is the one they inputted and can close the application.

#### 3.2.2. Influence of individual works

The main layout and notification were directly reused from Viola's design for the home screen. The design was inspired by MobilePay. Some changes were made to better host the user's work on the application:

1. The "Plant" and "Remove" selectors were removed - the only functionality available on the home screen is to record planted trees. Undoing was moved to the history screen.
2. The location selector in the top right corner was given a label indicating the user's current position to always visualize the current state of the application. Additionally, the "pressability" of the button was emphasized with a chip-like design.
3. The layout of the input pad was altered by adding a "back" button to remove inputted text and by moving the "Submit" key away from the numpad to its own button.

---

### 3.3. Dashboard screen

A.k.a. info screen or analytics screen.

#### 3.3.1. Description

The information screen shows multiple different statistics for the user and their location. The shown statistics are made to be as useful as possible and to promote healthy competition between users to improve the results.

- Total planted trees by user (primarily month, also day / week / year / all time).
- Total planted trees in current location and progress to planting target (primarily month, also day / week / year / all time).
- Leaderboards (day / week / month / year / all time) to show who has planted the most trees.

#### 3.3.2. Influence of individual works

The design was almost directly copied as is from Jussi's design for the dashboard screen.

#### 3.3.3. Other considerations

The leaderboard is aimed to promote healthy competition, but has not been tested in real life and it could have surprising, even counterproductive effects if improperly implemented.

The data is only numeric data for number of trees. No other data is currently available (types of trees, age of trees, exact location of each planted tree).

---

### 3.4. History screen

#### 3.4.1. Description

The history screen provides the user with:

1. Confidence that their planted records have gone through properly.
2. Ability to recover from user error by undoing.
3. Accurate history information if the user requires it.

The undo / delete record button deletes the record and shows a notification that the deletion was succesful.

#### 3.4.2. Influence of individual works

The design was based on Ivar's design. The main changes were related to the visual language and how information was presented to the user.

#### 3.4.3. Other considerations

The undo / delete record button is on another tab than where trees are inputted from. This might make it difficult for users to initially find.

---

### 3.5. Settings screen

#### 3.5.1. Description

A generic settings screen to access preferences, user profile details, sign out, see information about the application and more. The design of this page is directly inspired by existing applications to match the user's expectations of what they expect to find on a settings screen.

#### 3.5.2. Influence of individual works

The design was based on Otto's design. The only change was the addition of a missing sign out button.

---

### 3.6 Location selector

#### 3.6.1. Description

The location selector in the navigation bar is always present (expect for the login screen) as all actions in the application are location-dependent. This way the user always sees their current location. In the future they might also be able to change it. Currently it is auto-detected from the user's location.

#### 3.6.2. Influence of individual works

The location selector was based on Viola's and Jussi's designs who both modelled a location selector in the top right corner. The exact design with the chip-button layout, icon and current location label were from Jussi's design.