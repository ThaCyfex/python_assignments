# Basic Calculator Program

# Get user input for the first number
num1 = float(input("Enter the first number: "))  # Prompt user to enter the first number

# Get user input for the second number
num2 = float(input("Enter the second number: "))  # Prompt user to enter the second number

# Get user input for the mathematical operation
operation = input("Enter the operation (+, -, *, /): ")  # Prompt user to enter the operation they want

# Perform the chosen operation
if operation == "+":
    # Addition operation
    result = num1 + num2
    print(f"{num1} + {num2} = {result}")  # Display the result of the addition
elif operation == "-":
    # Subtraction operation
    result = num1 - num2
    print(f"{num1} - {num2} = {result}")  # Display the result of the subtraction
elif operation == "*":
    # Multiplication operation
    result = num1 * num2
    print(f"{num1} * {num2} = {result}")  # Display the result of the multiplication
elif operation == "/":
    # Division operation
    if num2 != 0:
        # Check to prevent division by zero
        result = num1 / num2
        print(f"{num1} / {num2} = {result}")  # Display the result of the division
    else:
        print("Error: Division by zero is not allowed.")  # Display an error for division by zero
else:
    # Handle invalid operations
    print("Invalid operation. Please enter one of +, -, *, /.")  # Inform the user of invalid input