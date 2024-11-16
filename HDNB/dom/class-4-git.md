# Introduction to Git

## 1. What is Git?
- **Definition**: Git is a version control system (VCS) that helps track changes to files and collaborate on projects.
  
**Why Use Git?** 
 - Keeps a history of changes.
 - Facilitates collaboration with teammates.
 - Allows reverting to previous versions of files.
 - Useful for branching and experimenting without affecting the main project.

---

## 2. Installing Git
- Download and install Git from [git-scm.com](https://git-scm.com/).
- Verify the installation: 

      bash
      git --version

----------

## 3. Basic Git Workflow

1.  **Initialize a Repository**
  
     ```git init```  
    This creates a `.git` folder, where Git stores all version control data.
    
2.  **Add Files to the Staging Area**
   
   ``` 
    git add <file_name>  # Add a specific file
    git add .            # Add all changes
```
  
  
3.  **Commit Changes**
    

    ```git commit -m "Commit message"``` 
    
4.  **Check the Status**
   
    
    ```git status``` 
    
5.  **View Commit History**
    
    ```git log``` 
    

----------

## 4. Working with Remote Repositories

-   **Connect to a Remote Repository**

    
    ```git remote add origin <remote_repository_url>``` 
    
-   **Push Changes to Remote**
    
    ```git push -u origin main``` 
    
-   **Clone a Repository**
    

    
    ```git clone <repository_url>``` 
    
-   **Pull Changes**
    
    ```git pull origin main``` 
    

----------

## 5. Branching in Git

-   **What is a Branch?**
    
    -   A branch is a separate line of development.
    -   The default branch is called `main` (or `master` in older Git versions).
-   **Create a New Branch**

    
    ```git branch <branch_name>``` 
    
-   **Switch to a Branch**
    
    ```git checkout <branch_name>``` 
    
-   **Create and Switch Simultaneously**
    
    ```git checkout -b <branch_name>``` 
    
-   **Merge Branches**
    
    -   First, switch to the branch you want to merge into (e.g., `main`):
        
        ```git checkout main``` 
        
    -   Merge the feature branch:
        
        ```git merge <branch_name>``` 
        

----------

## 6. Resolving Merge Conflicts

-   **What is a Merge Conflict?**
    -   Occurs when two branches have changes in the same part of a file.
-   **Steps to Resolve:**
    1.  Open the conflicting file.
    2.  Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
    3.  Edit the file to resolve the conflict.
    4.  Add and commit the resolved file:
        
        bash
        
        Copy code
        
        ```git add <file_name>
        git commit -m "Resolved merge conflict"``` 

----------

## 7. Useful Commands

-   **Check Changes**
    
    ```git diff``` 
    
-   **Discard Changes**
    
    ```git checkout -- <file_name>``` 
    
-   **Delete a Branch**
    
    ```git branch -d <branch_name>``` 
    
-   **Undo the Last Commit**
    
    ```git reset --soft HEAD~1``` 
    

----------

## 8. Practical Exercise

1.  **Initialize a Git Repository**
    
    ```mkdir git-demo
    cd git-demo
    git init``` 
    
2.  **Create a File**
    
    ```echo "Hello Git" > hello.txt
    git add hello.txt
    git commit -m "Initial commit"``` 
    
3.  **Modify the File**
    
    ```echo "Learning Git" >> hello.txt
    git add .
    git commit -m "Added a new line"``` 
    
4.  **Create and Merge a Branch**
    

    
    ```git checkout -b feature-branch
    echo "New Feature" >> feature.txt
    git add .
    git commit -m "Added feature.txt"
    git checkout main
    git merge feature-branch``` 
----------

## 9. Tips for Using Git

-   Commit often with meaningful messages.
-   Pull before you push to ensure you're up-to-date.
-   Use `.gitignore` to exclude files from being tracked.

----------

## 10. Additional Resources

-   [Official Git Documentation](https://git-scm.com/doc)
-   [GitHub Learning Lab](https://lab.github.com/)
-  [Tutorials](https://www.youtube.com/watch?v=zTjRZNkhiEU)
