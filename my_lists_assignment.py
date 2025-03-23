# Step 1: I'm starting by creating an empty list to store my shopping items. Simple yet essential!
my_list = []

# Step 2: Now, I'm adding the numbers 10, 20, 30, and 40 to my list one by one. Watch the list grow!
my_list.append(10)
my_list.append(20)
my_list.append(30)
my_list.append(40)

# Step 3: I'm inserting 15 at the second position in the list (index 1).
my_list.insert(1, 15)

# Step 4: Let's make my list even bigger by extending it with another list of numbers: [50, 60, 70].
my_list.extend([50, 60, 70])

# Step 5: I'm removing the last element from the list.
my_list.pop()

# Step 6: I'm putting all the numbers in ascending order for that neat touch.
my_list.sort()

# Step 7: Time to find where 30 is hiding in my sorted list and print its index.
index_of_30 = my_list.index(30)
print(f"The index of 30 in my_list is: {index_of_30}")
