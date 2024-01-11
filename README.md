# cv_generator

This project is currently on progress. A live version will be posted when all the sections get completed.

## Running a local copy

> [!CAUTION]
> You are free to clone this repository, however, this is still a work on progress and a lot of changes are being made all the time. A new update will be released when a stable version is uploaded.

Instructions on how to run a local copy will be added in the future.

## Updates

- ~~DataContext~~: The data is handled by using a custom ContextProvider that gave access to the data and the methods to update the data to each one of the components that needed it. However, even though this approach is valid, it can lead to performance issues later on, added to the fact that debugging was quite hard. This context was removed in favour of a better state solution.
- **Store\***: From commit 2fdc9e7, the data is handled with a Store collection of zustand. This makes accessing the values and updating them much easier than before, saving code and complex selectors. The Store is still in progress and sections are missing. Also, the value of the sections is being imported from a pre-loaded data from the local files, which will change in the future for a Database data load. Lastly, the Sidebar context is still being used as of now, but since it has little to no impact in terms of performance it'll be kept like that and will probably be replaced in the future.

### Contact

Feel free to contact me for any reasons at cesar.acb98@gmail.com
