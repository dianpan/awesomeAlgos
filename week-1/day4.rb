# O(n^2) runtime
def productify(array)
  counter = 0
  result = []
  product = 1

  while counter < array.length
    array.each_with_index do |int, i|
      next if i == counter
      product = product * int
    end
    counter += 1
    result.push(product)
    product = 1
  end
    result
end
p productify([-1,2,3,4])

# O(n) runtime
def productify_optimized(array)
end

p productify_optimized([-1,2,3,4])



def binary_search()
end


def matrix_region_sum
end

def merge_sort
end
