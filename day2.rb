def fibs_iterative(n)
end

def fibs_recursive(n)
end

def is_palindrome?(str)
end

# Write a method that takes a string as input.
# It should return true if the input is a valid IPv4 address
# (ie. anything between 0.0.0.0 and 255.255.255.255 is valid).+

def valid_ip?(string)
  decimal_counter = 0
  range_counter = 0

  strArray = string.split('')
  strArray.each do |char|
    if char == '.'
      decimal_counter += 1
    end
  end

  numArray = string.split('.')
  numArray.each do |int|
    int = int.to_i
    if int >= 0 && int <= 255
      range_counter += 1
    else
      return
    end
  end

  if decimal_counter == 3 && range_counter == 4
    p "true"
    return true
  else
    p "false"
    return false
  end
end

valid_ip?('0.0.0.0')
valid_ip?('255.255.255.255')
valid_ip?('19.20.21.22')

# Write a method that reads in a file of integers, one per line, and sums them.
# Skip the line if it begins with a "#".
def sum_from_file(filename)
end
