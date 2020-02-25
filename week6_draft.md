# Forms and Validation 





## Reading List 

## Essential Reading

- [Conditional Rendering In React](https://reactjs.org/docs/conditional-rendering.html)


## Optional Reading 

[Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)



## Conditional Rendering 

Often you will want to hide or show elements based on some given state (e.g.displaying errors on a form). In other words, you will want to conditionally render some part of the UI.

"Conditional rendering in React works the same way conditions work in JavaScript -  as such, there is a very shallow learning curve. 

JavaScript facilitates multiple approaches to conditions. The method you use is very much down to your preference as a developer or your given projects style guide.  Let's explore some of the most common methods:


### If/Else

I very rarely use if/else on the UI - it is just too verbose. However, on the positive side, it is very easy to rationalise about. 

```JavaScript 
{if (isLoggedIn) {
      <LogoutButton onClick={handleLogoutClick} />;
    } else {
  <LoginButton onClick ={handleLoginClick} />;
    }
```

### The Turnery Operator
 
If I need to conditionally render 1 of 2 very small sections of UI I will normally use this approach. 

```JavaScript
  { isLoggedIn ?   <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick ={handleLoginClick} /> }
```

You can think of a turnery operator as a short-hand if/else.  

**If**, `isLoggedIn` is true then the expression immediately after the `?` is executed. **Else**, if `isLoggedIn` is false then the expression after the `:` will instead run. 

## The logical && operator (my go to solution)

Javascript has an interesting property summarised by Mozilla "the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they will return a non-Boolean value.".  The important statement in the previous quote is, "return the value of one of the specified operands",  we can use this idea to construct render conditions.


```JavaScript
{
    isLoggedIn && (<LogoutButton onClick={handleLogoutClick}/>);
}

{
    !isLoggedIn && (<LogoutButton onClick={handleLogoutClick}/>); 
}

```

In the above example, for each && condition, either false will be returned if the first part of the condition is false.  Or, if the first part of the condition is true, then the value on the right of the && is returned, which is, in this case, is a React component.  I really like this approach as, very much like the `if/else` example, it is very easy to rationalise about. Moreover, it lends itself to displaying larger blocks of UI: 

```JavaScript
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
         <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
        <p> 
            You should go to your inbox ASAP - the message could be from Joe!
        </p>
      }

       {unreadMessages.length == 0 &&
         <h2>
           Nice work, you have no messages
        </h2>
      }
    </div>
  );
}

```

:::tip

## Task 1 - Conditional Rendering 

Navigate to `http://localhost:3000/join` - it is incomplete. As such I want you to implement the following logic - which I shall express using user stories:

- As a user, the join form should be hidden from me by default, so I am encouraged to join using social sign in. 

- As a user, I should be able to display the join form by clicking the Email button, so I can join using an email. 
 
- As a user, the Email button should be hidden after I click it, as it is no longer needed.

Use what you have just learnt about conditional rendering and also what we covered with regards to [event handling](https://web-dev-industry-2020.web.app/sessions/week_4/#handling-events) to implement the above user stories.  You will only need to update the single file - `/src/Components/LoginForm.js`


:::
