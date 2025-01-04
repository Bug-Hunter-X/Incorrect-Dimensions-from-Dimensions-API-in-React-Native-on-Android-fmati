# React Native Dimensions API Issue on Android

This repository demonstrates a common issue encountered when using the `Dimensions` API in React Native on Android.  The problem involves getting incorrect or zero values for screen dimensions, leading to layout glitches. The solution showcases a robust way to handle this timing-sensitive issue.

## Bug Description
The `Dimensions` API in React Native, when used prematurely, can return incorrect dimension values on Android. This often happens if the `Dimensions.get()` call is made before the component's layout has fully rendered.

## How to Reproduce
1. Clone this repository.
2. Run the app on an Android emulator or device.
3. Observe the layout; you'll likely see unexpected behavior due to incorrect dimension values.

## Solution
The solution uses `useEffect` and `Dimensions.addEventListener` to ensure we access the dimensions only after the component has mounted and the dimensions are available. We also cleanly remove the listener to prevent memory leaks.

## Technologies Used
* React Native
* Javascript