class Node
  attr_reader :name
  attr_accessor :previous, :next

  def initialize(name)
    @name = name
    @previous = nil
    @next = nil
  end
end

class LinkedList

  def initialize
    @head = nil
  end

  def add(fname)
    newPerson = Node.new(fname)

    if @head == nil
      @head = newPerson
      puts @head
      puts @head.next
      @head.next = @head
      @head.previous = @head
    else
      if(@head.previous == @head)
        @head.previous = newPerson
        @head.next = newPerson
        newPerson.previous = @head
        newPerson.next = @head
      else
        current = @head
        while(current != @head.previous)
          if newPerson.name == current.name || newPerson.name > current.name && newPerson.name < current.next.name || current.next.name < current.name && newPerson.name < current.next.name
            newPerson.next = current.next
            newPerson.next.previous = newPerson
            newPerson.previous = current
            current.next = newPerson
          end
          current = current.next
        end
      end
    end
  end

  public def p
    if @head == nil
      puts "HEAD IS NIL"
    else
      puts "HEAD: #{@head.name}"
    end
    current = @head
    while current != nil && current.next != current && current.next != @head
      puts "Person #{current.name}"
      if current.next == nil
        puts "Next is NIL"
      else
        puts "Next #{current.next.name}"
      end
      current = current.next
    end
  end
end

ll = LinkedList.new
ll.p
ll.add('Sally')
ll.p
ll.add('Joe')
ll.p
ll.add('Abby')
ll.p

# Sally
# Joe
# Jane - head
# Frank
# Ed
# Dolly
# Abby
